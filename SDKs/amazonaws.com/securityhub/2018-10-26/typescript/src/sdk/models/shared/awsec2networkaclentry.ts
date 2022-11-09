import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IcmpTypeCode } from "./icmptypecode";
import { PortRangeFromTo } from "./portrangefromto";


// AwsEc2NetworkAclEntry
/** 
 * A rule for the network ACL. Each rule allows or denies access based on the IP address, traffic direction, port, and protocol.
**/
export class AwsEc2NetworkAclEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=CidrBlock" })
  cidrBlock?: string;

  @Metadata({ data: "json, name=Egress" })
  egress?: boolean;

  @Metadata({ data: "json, name=IcmpTypeCode" })
  icmpTypeCode?: IcmpTypeCode;

  @Metadata({ data: "json, name=Ipv6CidrBlock" })
  ipv6CidrBlock?: string;

  @Metadata({ data: "json, name=PortRange" })
  portRange?: PortRangeFromTo;

  @Metadata({ data: "json, name=Protocol" })
  protocol?: string;

  @Metadata({ data: "json, name=RuleAction" })
  ruleAction?: string;

  @Metadata({ data: "json, name=RuleNumber" })
  ruleNumber?: number;
}
