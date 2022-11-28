import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsRdsDbSubnetGroupSubnetAvailabilityZone } from "./awsrdsdbsubnetgroupsubnetavailabilityzone";



// AwsRdsDbSubnetGroupSubnet
/** 
 * Information about a subnet in a subnet group.
**/
export class AwsRdsDbSubnetGroupSubnet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SubnetAvailabilityZone" })
  subnetAvailabilityZone?: AwsRdsDbSubnetGroupSubnetAvailabilityZone;

  @SpeakeasyMetadata({ data: "json, name=SubnetIdentifier" })
  subnetIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=SubnetStatus" })
  subnetStatus?: string;
}
