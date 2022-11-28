import { SpeakeasyBase } from "../../../internal/utils";
import { ShareStatusEnum } from "./sharestatusenum";
import { ResolverQueryLogConfigStatusEnum } from "./resolverquerylogconfigstatusenum";
/**
 * In the response to a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverQueryLogConfig.html">CreateResolverQueryLogConfig</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteResolverQueryLogConfig.html">DeleteResolverQueryLogConfig</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverQueryLogConfig.html">GetResolverQueryLogConfig</a>, or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverQueryLogConfigs.html">ListResolverQueryLogConfigs</a> request, a complex type that contains settings for one query logging configuration.
**/
export declare class ResolverQueryLogConfig extends SpeakeasyBase {
    arn?: string;
    associationCount?: number;
    creationTime?: string;
    creatorRequestId?: string;
    destinationArn?: string;
    id?: string;
    name?: string;
    ownerId?: string;
    shareStatus?: ShareStatusEnum;
    status?: ResolverQueryLogConfigStatusEnum;
}
