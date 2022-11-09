import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AwsRdsDbSubnetGroupSubnetAvailabilityZone } from "./awsrdsdbsubnetgroupsubnetavailabilityzone";


// AwsRdsDbSubnetGroupSubnet
/** 
 * Information about a subnet in a subnet group.
**/
export class AwsRdsDbSubnetGroupSubnet extends SpeakeasyBase {
  @Metadata({ data: "json, name=SubnetAvailabilityZone" })
  subnetAvailabilityZone?: AwsRdsDbSubnetGroupSubnetAvailabilityZone;

  @Metadata({ data: "json, name=SubnetIdentifier" })
  subnetIdentifier?: string;

  @Metadata({ data: "json, name=SubnetStatus" })
  subnetStatus?: string;
}
