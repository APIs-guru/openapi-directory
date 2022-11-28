import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NetworkInterface
/** 
 * Describes a network interface.
**/
export class NetworkInterface extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=networkInterfaceId" })
  networkInterfaceId?: string;

  @SpeakeasyMetadata({ data: "json, name=privateIpAddress" })
  privateIpAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=publicIpAddress" })
  publicIpAddress?: string;
}
