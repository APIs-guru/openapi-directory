import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsRdsDbSubnetGroupSubnet } from "./awsrdsdbsubnetgroupsubnet";



// AwsRdsDbSubnetGroup
/** 
 * Information about the subnet group for the database instance.
**/
export class AwsRdsDbSubnetGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DbSubnetGroupArn" })
  dbSubnetGroupArn?: string;

  @SpeakeasyMetadata({ data: "json, name=DbSubnetGroupDescription" })
  dbSubnetGroupDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=DbSubnetGroupName" })
  dbSubnetGroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=SubnetGroupStatus" })
  subnetGroupStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=Subnets", elemType: AwsRdsDbSubnetGroupSubnet })
  subnets?: AwsRdsDbSubnetGroupSubnet[];

  @SpeakeasyMetadata({ data: "json, name=VpcId" })
  vpcId?: string;
}
