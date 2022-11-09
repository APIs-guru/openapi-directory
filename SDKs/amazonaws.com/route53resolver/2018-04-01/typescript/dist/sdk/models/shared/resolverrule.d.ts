import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RuleTypeOptionEnum } from "./ruletypeoptionenum";
import { ShareStatusEnum } from "./sharestatusenum";
import { ResolverRuleStatusEnum } from "./resolverrulestatusenum";
import { TargetAddress } from "./targetaddress";
/**
 * For queries that originate in your VPC, detailed information about a Resolver rule, which specifies how to route DNS queries out of the VPC. The <code>ResolverRule</code> parameter appears in the response to a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverRule.html">CreateResolverRule</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteResolverRule.html">DeleteResolverRule</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverRule.html">GetResolverRule</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRules.html">ListResolverRules</a>, or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverRule.html">UpdateResolverRule</a> request.
**/
export declare class ResolverRule extends SpeakeasyBase {
    arn?: string;
    creationTime?: string;
    creatorRequestId?: string;
    domainName?: string;
    id?: string;
    modificationTime?: string;
    name?: string;
    ownerId?: string;
    resolverEndpointId?: string;
    ruleType?: RuleTypeOptionEnum;
    shareStatus?: ShareStatusEnum;
    status?: ResolverRuleStatusEnum;
    statusMessage?: string;
    targetIps?: TargetAddress[];
}
