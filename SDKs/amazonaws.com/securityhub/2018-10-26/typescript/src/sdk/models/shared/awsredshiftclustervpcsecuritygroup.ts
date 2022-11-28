import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsRedshiftClusterVpcSecurityGroup
/** 
 * A VPC security group that the cluster belongs to, if the cluster is in a VPC.
**/
export class AwsRedshiftClusterVpcSecurityGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=VpcSecurityGroupId" })
  vpcSecurityGroupId?: string;
}
