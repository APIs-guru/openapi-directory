import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NetworkInterface
/** 
 * Describes a network interface. 
**/
export class NetworkInterface extends SpeakeasyBase {
  @SpeakeasyMetadata()
  availabilityZone?: string;

  @SpeakeasyMetadata()
  networkInterfaceId?: string;

  @SpeakeasyMetadata()
  privateIpAddress?: string;

  @SpeakeasyMetadata()
  subnetId?: string;
}
