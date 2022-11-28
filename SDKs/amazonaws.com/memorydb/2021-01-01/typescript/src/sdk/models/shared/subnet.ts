import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AvailabilityZone } from "./availabilityzone";



// Subnet
/** 
 * Represents the subnet associated with a cluster. This parameter refers to subnets defined in Amazon Virtual Private Cloud (Amazon VPC) and used with MemoryDB.
**/
export class Subnet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AvailabilityZone" })
  availabilityZone?: AvailabilityZone;

  @SpeakeasyMetadata({ data: "json, name=Identifier" })
  identifier?: string;
}
