import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AwsEc2SecurityGroupIpRange } from "./awsec2securitygroupiprange";
import { AwsEc2SecurityGroupIpv6Range } from "./awsec2securitygroupipv6range";
import { AwsEc2SecurityGroupPrefixListId } from "./awsec2securitygroupprefixlistid";
import { AwsEc2SecurityGroupUserIdGroupPair } from "./awsec2securitygroupuseridgrouppair";


// AwsEc2SecurityGroupIpPermission
/** 
 * An IP permission for an EC2 security group.
**/
export class AwsEc2SecurityGroupIpPermission extends SpeakeasyBase {
  @Metadata({ data: "json, name=FromPort" })
  fromPort?: number;

  @Metadata({ data: "json, name=IpProtocol" })
  ipProtocol?: string;

  @Metadata({ data: "json, name=IpRanges", elemType: shared.AwsEc2SecurityGroupIpRange })
  ipRanges?: AwsEc2SecurityGroupIpRange[];

  @Metadata({ data: "json, name=Ipv6Ranges", elemType: shared.AwsEc2SecurityGroupIpv6Range })
  ipv6Ranges?: AwsEc2SecurityGroupIpv6Range[];

  @Metadata({ data: "json, name=PrefixListIds", elemType: shared.AwsEc2SecurityGroupPrefixListId })
  prefixListIds?: AwsEc2SecurityGroupPrefixListId[];

  @Metadata({ data: "json, name=ToPort" })
  toPort?: number;

  @Metadata({ data: "json, name=UserIdGroupPairs", elemType: shared.AwsEc2SecurityGroupUserIdGroupPair })
  userIdGroupPairs?: AwsEc2SecurityGroupUserIdGroupPair[];
}
