import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NetworkInterface
/** 
 * Describes a network interface.
**/
export class NetworkInterface extends SpeakeasyBase {
  @Metadata({ data: "json, name=networkInterfaceId" })
  networkInterfaceId?: string;

  @Metadata({ data: "json, name=privateIpAddress" })
  privateIpAddress?: string;

  @Metadata({ data: "json, name=publicIpAddress" })
  publicIpAddress?: string;
}
