import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsRdsDbSubnetGroupSubnetAvailabilityZone
/** 
 * An Availability Zone for a subnet in a subnet group.
**/
export class AwsRdsDbSubnetGroupSubnetAvailabilityZone extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}
