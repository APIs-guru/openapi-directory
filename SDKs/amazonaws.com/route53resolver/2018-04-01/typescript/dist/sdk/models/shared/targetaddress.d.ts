import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * In a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverRule.html">CreateResolverRule</a> request, an array of the IPs that you want to forward DNS queries to.
**/
export declare class TargetAddress extends SpeakeasyBase {
    ip: string;
    port?: number;
}
