import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsRedshiftClusterVpcSecurityGroup
/** 
 * A VPC security group that the cluster belongs to, if the cluster is in a VPC.
**/
export class AwsRedshiftClusterVpcSecurityGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=Status" })
  status?: string;

  @Metadata({ data: "json, name=VpcSecurityGroupId" })
  vpcSecurityGroupId?: string;
}
