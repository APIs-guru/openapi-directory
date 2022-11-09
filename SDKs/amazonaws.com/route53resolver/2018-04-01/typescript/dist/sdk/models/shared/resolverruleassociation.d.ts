import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ResolverRuleAssociationStatusEnum } from "./resolverruleassociationstatusenum";
/**
 * In the response to an <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverRule.html">AssociateResolverRule</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverRule.html">DisassociateResolverRule</a>, or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRuleAssociations.html">ListResolverRuleAssociations</a> request, provides information about an association between a Resolver rule and a VPC. The association determines which DNS queries that originate in the VPC are forwarded to your network.
**/
export declare class ResolverRuleAssociation extends SpeakeasyBase {
    id?: string;
    name?: string;
    resolverRuleId?: string;
    status?: ResolverRuleAssociationStatusEnum;
    statusMessage?: string;
    vpcId?: string;
}
