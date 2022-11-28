import { SpeakeasyBase } from "../../../internal/utils";
import { ResolverQueryLogConfigAssociationErrorEnum } from "./resolverquerylogconfigassociationerrorenum";
import { ResolverQueryLogConfigAssociationStatusEnum } from "./resolverquerylogconfigassociationstatusenum";
/**
 * In the response to an <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverQueryLogConfig.html">AssociateResolverQueryLogConfig</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverQueryLogConfig.html">DisassociateResolverQueryLogConfig</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverQueryLogConfigAssociation.html">GetResolverQueryLogConfigAssociation</a>, or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverQueryLogConfigAssociations.html">ListResolverQueryLogConfigAssociations</a>, request, a complex type that contains settings for a specified association between an Amazon VPC and a query logging configuration.
**/
export declare class ResolverQueryLogConfigAssociation extends SpeakeasyBase {
    creationTime?: string;
    error?: ResolverQueryLogConfigAssociationErrorEnum;
    errorMessage?: string;
    id?: string;
    resolverQueryLogConfigId?: string;
    resourceId?: string;
    status?: ResolverQueryLogConfigAssociationStatusEnum;
}
