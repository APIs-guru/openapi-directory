import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AwsRdsDbSubnetGroupSubnet } from "./awsrdsdbsubnetgroupsubnet";


// AwsRdsDbSubnetGroup
/** 
 * Information about the subnet group for the database instance.
**/
export class AwsRdsDbSubnetGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=DbSubnetGroupArn" })
  dbSubnetGroupArn?: string;

  @Metadata({ data: "json, name=DbSubnetGroupDescription" })
  dbSubnetGroupDescription?: string;

  @Metadata({ data: "json, name=DbSubnetGroupName" })
  dbSubnetGroupName?: string;

  @Metadata({ data: "json, name=SubnetGroupStatus" })
  subnetGroupStatus?: string;

  @Metadata({ data: "json, name=Subnets", elemType: shared.AwsRdsDbSubnetGroupSubnet })
  subnets?: AwsRdsDbSubnetGroupSubnet[];

  @Metadata({ data: "json, name=VpcId" })
  vpcId?: string;
}
