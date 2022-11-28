import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NetworkMountPoint
/** 
 * Mount point for a network.
**/
export class NetworkMountPoint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultGateway" })
  defaultGateway?: boolean;

  @SpeakeasyMetadata({ data: "json, name=instance" })
  instance?: string;

  @SpeakeasyMetadata({ data: "json, name=ipAddress" })
  ipAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=logicalInterface" })
  logicalInterface?: string;
}
