import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AvailabilityZone } from "./availabilityzone";
import { Outpost } from "./outpost";



// Subnet
/** 
 *  This data type is used as a response element for the <code>DescribeDBSubnetGroups</code> operation. 
**/
export class Subnet extends SpeakeasyBase {
  @SpeakeasyMetadata()
  subnetAvailabilityZone?: AvailabilityZone;

  @SpeakeasyMetadata()
  subnetIdentifier?: string;

  @SpeakeasyMetadata()
  subnetOutpost?: Outpost;

  @SpeakeasyMetadata()
  subnetStatus?: string;
}
