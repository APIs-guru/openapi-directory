import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AvailabilityZone } from "./availabilityzone";



// Subnet
/** 
 * <p>Specifies a subnet.</p> <p> This data type is used as a response element in the <a>DescribeDBSubnetGroups</a> action.</p>
**/
export class Subnet extends SpeakeasyBase {
  @SpeakeasyMetadata()
  subnetAvailabilityZone?: AvailabilityZone;

  @SpeakeasyMetadata()
  subnetIdentifier?: string;

  @SpeakeasyMetadata()
  subnetStatus?: string;
}
