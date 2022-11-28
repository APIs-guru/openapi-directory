import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IcmpTypeCode } from "./icmptypecode";
import { PortRangeFromTo } from "./portrangefromto";



// AwsEc2NetworkAclEntry
/** 
 * A rule for the network ACL. Each rule allows or denies access based on the IP address, traffic direction, port, and protocol.
**/
export class AwsEc2NetworkAclEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CidrBlock" })
  cidrBlock?: string;

  @SpeakeasyMetadata({ data: "json, name=Egress" })
  egress?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IcmpTypeCode" })
  icmpTypeCode?: IcmpTypeCode;

  @SpeakeasyMetadata({ data: "json, name=Ipv6CidrBlock" })
  ipv6CidrBlock?: string;

  @SpeakeasyMetadata({ data: "json, name=PortRange" })
  portRange?: PortRangeFromTo;

  @SpeakeasyMetadata({ data: "json, name=Protocol" })
  protocol?: string;

  @SpeakeasyMetadata({ data: "json, name=RuleAction" })
  ruleAction?: string;

  @SpeakeasyMetadata({ data: "json, name=RuleNumber" })
  ruleNumber?: number;
}
