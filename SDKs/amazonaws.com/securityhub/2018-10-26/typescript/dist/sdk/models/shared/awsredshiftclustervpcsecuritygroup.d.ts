import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A VPC security group that the cluster belongs to, if the cluster is in a VPC.
**/
export declare class AwsRedshiftClusterVpcSecurityGroup extends SpeakeasyBase {
    status?: string;
    vpcSecurityGroupId?: string;
}
