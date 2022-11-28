import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A relationship between a security group and a user.
**/
export declare class AwsEc2SecurityGroupUserIdGroupPair extends SpeakeasyBase {
    groupId?: string;
    groupName?: string;
    peeringStatus?: string;
    userId?: string;
    vpcId?: string;
    vpcPeeringConnectionId?: string;
}
