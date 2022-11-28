import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsRdsDbInstanceVpcSecurityGroup
/** 
 * A VPC security groups that the DB instance belongs to.
**/
export class AwsRdsDbInstanceVpcSecurityGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=VpcSecurityGroupId" })
  vpcSecurityGroupId?: string;
}
