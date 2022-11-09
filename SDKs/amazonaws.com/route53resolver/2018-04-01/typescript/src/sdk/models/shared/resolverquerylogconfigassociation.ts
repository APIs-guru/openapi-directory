import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResolverQueryLogConfigAssociationErrorEnum } from "./resolverquerylogconfigassociationerrorenum";
import { ResolverQueryLogConfigAssociationStatusEnum } from "./resolverquerylogconfigassociationstatusenum";


// ResolverQueryLogConfigAssociation
/** 
 * In the response to an <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverQueryLogConfig.html">AssociateResolverQueryLogConfig</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverQueryLogConfig.html">DisassociateResolverQueryLogConfig</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverQueryLogConfigAssociation.html">GetResolverQueryLogConfigAssociation</a>, or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverQueryLogConfigAssociations.html">ListResolverQueryLogConfigAssociations</a>, request, a complex type that contains settings for a specified association between an Amazon VPC and a query logging configuration.
**/
export class ResolverQueryLogConfigAssociation extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: string;

  @Metadata({ data: "json, name=Error" })
  error?: ResolverQueryLogConfigAssociationErrorEnum;

  @Metadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=ResolverQueryLogConfigId" })
  resolverQueryLogConfigId?: string;

  @Metadata({ data: "json, name=ResourceId" })
  resourceId?: string;

  @Metadata({ data: "json, name=Status" })
  status?: ResolverQueryLogConfigAssociationStatusEnum;
}
