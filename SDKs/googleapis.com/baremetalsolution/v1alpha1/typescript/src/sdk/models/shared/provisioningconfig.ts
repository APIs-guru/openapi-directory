import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceConfig } from "./instanceconfig";
import { NetworkConfig } from "./networkconfig";
import { VolumeConfig } from "./volumeconfig";



// ProvisioningConfig
/** 
 * An provisioning configuration.
**/
export class ProvisioningConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instances", elemType: InstanceConfig })
  instances?: InstanceConfig[];

  @SpeakeasyMetadata({ data: "json, name=networks", elemType: NetworkConfig })
  networks?: NetworkConfig[];

  @SpeakeasyMetadata({ data: "json, name=ticketId" })
  ticketId?: string;

  @SpeakeasyMetadata({ data: "json, name=volumes", elemType: VolumeConfig })
  volumes?: VolumeConfig[];
}
