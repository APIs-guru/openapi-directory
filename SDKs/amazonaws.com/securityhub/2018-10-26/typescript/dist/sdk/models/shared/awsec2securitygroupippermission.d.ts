import { SpeakeasyBase } from "../../../internal/utils";
import { AwsEc2SecurityGroupIpRange } from "./awsec2securitygroupiprange";
import { AwsEc2SecurityGroupIpv6Range } from "./awsec2securitygroupipv6range";
import { AwsEc2SecurityGroupPrefixListId } from "./awsec2securitygroupprefixlistid";
import { AwsEc2SecurityGroupUserIdGroupPair } from "./awsec2securitygroupuseridgrouppair";
/**
 * An IP permission for an EC2 security group.
**/
export declare class AwsEc2SecurityGroupIpPermission extends SpeakeasyBase {
    fromPort?: number;
    ipProtocol?: string;
    ipRanges?: AwsEc2SecurityGroupIpRange[];
    ipv6Ranges?: AwsEc2SecurityGroupIpv6Range[];
    prefixListIds?: AwsEc2SecurityGroupPrefixListId[];
    toPort?: number;
    userIdGroupPairs?: AwsEc2SecurityGroupUserIdGroupPair[];
}
