import { SpeakeasyBase } from "../../../internal/utils";
import { AwsEc2SecurityGroupIpPermission } from "./awsec2securitygroupippermission";
/**
 * Details about an EC2 security group.
**/
export declare class AwsEc2SecurityGroupDetails extends SpeakeasyBase {
    groupId?: string;
    groupName?: string;
    ipPermissions?: AwsEc2SecurityGroupIpPermission[];
    ipPermissionsEgress?: AwsEc2SecurityGroupIpPermission[];
    ownerId?: string;
    vpcId?: string;
}
