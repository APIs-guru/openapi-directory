import { SpeakeasyBase } from "../../../internal/utils";
import { IcmpTypeCode } from "./icmptypecode";
import { PortRangeFromTo } from "./portrangefromto";
/**
 * A rule for the network ACL. Each rule allows or denies access based on the IP address, traffic direction, port, and protocol.
**/
export declare class AwsEc2NetworkAclEntry extends SpeakeasyBase {
    cidrBlock?: string;
    egress?: boolean;
    icmpTypeCode?: IcmpTypeCode;
    ipv6CidrBlock?: string;
    portRange?: PortRangeFromTo;
    protocol?: string;
    ruleAction?: string;
    ruleNumber?: number;
}
