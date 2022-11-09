import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NetworkMountPoint
/** 
 * Mount point for a network.
**/
export class NetworkMountPoint extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultGateway" })
  defaultGateway?: boolean;

  @Metadata({ data: "json, name=instance" })
  instance?: string;

  @Metadata({ data: "json, name=ipAddress" })
  ipAddress?: string;

  @Metadata({ data: "json, name=logicalInterface" })
  logicalInterface?: string;
}
