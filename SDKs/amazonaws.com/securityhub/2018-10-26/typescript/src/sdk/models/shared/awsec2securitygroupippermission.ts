import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsEc2SecurityGroupIpRange } from "./awsec2securitygroupiprange";
import { AwsEc2SecurityGroupIpv6Range } from "./awsec2securitygroupipv6range";
import { AwsEc2SecurityGroupPrefixListId } from "./awsec2securitygroupprefixlistid";
import { AwsEc2SecurityGroupUserIdGroupPair } from "./awsec2securitygroupuseridgrouppair";



// AwsEc2SecurityGroupIpPermission
/** 
 * An IP permission for an EC2 security group.
**/
export class AwsEc2SecurityGroupIpPermission extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FromPort" })
  fromPort?: number;

  @SpeakeasyMetadata({ data: "json, name=IpProtocol" })
  ipProtocol?: string;

  @SpeakeasyMetadata({ data: "json, name=IpRanges", elemType: AwsEc2SecurityGroupIpRange })
  ipRanges?: AwsEc2SecurityGroupIpRange[];

  @SpeakeasyMetadata({ data: "json, name=Ipv6Ranges", elemType: AwsEc2SecurityGroupIpv6Range })
  ipv6Ranges?: AwsEc2SecurityGroupIpv6Range[];

  @SpeakeasyMetadata({ data: "json, name=PrefixListIds", elemType: AwsEc2SecurityGroupPrefixListId })
  prefixListIds?: AwsEc2SecurityGroupPrefixListId[];

  @SpeakeasyMetadata({ data: "json, name=ToPort" })
  toPort?: number;

  @SpeakeasyMetadata({ data: "json, name=UserIdGroupPairs", elemType: AwsEc2SecurityGroupUserIdGroupPair })
  userIdGroupPairs?: AwsEc2SecurityGroupUserIdGroupPair[];
}
