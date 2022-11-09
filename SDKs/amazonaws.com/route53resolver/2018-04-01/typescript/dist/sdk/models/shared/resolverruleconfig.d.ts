import { SpeakeasyBase } from "../../../internal/utils/utils";
import { TargetAddress } from "./targetaddress";
/**
 * In an <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverRule.html">UpdateResolverRule</a> request, information about the changes that you want to make.
**/
export declare class ResolverRuleConfig extends SpeakeasyBase {
    name?: string;
    resolverEndpointId?: string;
    targetIps?: TargetAddress[];
}
