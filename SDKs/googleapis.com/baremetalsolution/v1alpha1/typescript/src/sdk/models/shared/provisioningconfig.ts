import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InstanceConfig } from "./instanceconfig";
import { NetworkConfig } from "./networkconfig";
import { VolumeConfig } from "./volumeconfig";


// ProvisioningConfig
/** 
 * An provisioning configuration.
**/
export class ProvisioningConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=instances", elemType: shared.InstanceConfig })
  instances?: InstanceConfig[];

  @Metadata({ data: "json, name=networks", elemType: shared.NetworkConfig })
  networks?: NetworkConfig[];

  @Metadata({ data: "json, name=ticketId" })
  ticketId?: string;

  @Metadata({ data: "json, name=volumes", elemType: shared.VolumeConfig })
  volumes?: VolumeConfig[];
}
