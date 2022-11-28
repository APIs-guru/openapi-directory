import { SpeakeasyBase } from "../../../internal/utils";
import { ResolverEndpointDirectionEnum } from "./resolverendpointdirectionenum";
import { ResolverEndpointStatusEnum } from "./resolverendpointstatusenum";
/**
 * In the response to a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverEndpoint.html">CreateResolverEndpoint</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteResolverEndpoint.html">DeleteResolverEndpoint</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverEndpoint.html">GetResolverEndpoint</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverEndpoints.html">ListResolverEndpoints</a>, or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverEndpoint.html">UpdateResolverEndpoint</a> request, a complex type that contains settings for an existing inbound or outbound Resolver endpoint.
**/
export declare class ResolverEndpoint extends SpeakeasyBase {
    arn?: string;
    creationTime?: string;
    creatorRequestId?: string;
    direction?: ResolverEndpointDirectionEnum;
    hostVpcId?: string;
    id?: string;
    ipAddressCount?: number;
    modificationTime?: string;
    name?: string;
    securityGroupIds?: string[];
    status?: ResolverEndpointStatusEnum;
    statusMessage?: string;
}
