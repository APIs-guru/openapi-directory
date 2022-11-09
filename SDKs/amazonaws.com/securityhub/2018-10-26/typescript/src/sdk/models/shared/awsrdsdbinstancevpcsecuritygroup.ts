import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsRdsDbInstanceVpcSecurityGroup
/** 
 * A VPC security groups that the DB instance belongs to.
**/
export class AwsRdsDbInstanceVpcSecurityGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=Status" })
  status?: string;

  @Metadata({ data: "json, name=VpcSecurityGroupId" })
  vpcSecurityGroupId?: string;
}
