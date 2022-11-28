import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResolverRuleAssociationStatusEnum } from "./resolverruleassociationstatusenum";



// ResolverRuleAssociation
/** 
 * In the response to an <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverRule.html">AssociateResolverRule</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverRule.html">DisassociateResolverRule</a>, or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRuleAssociations.html">ListResolverRuleAssociations</a> request, provides information about an association between a Resolver rule and a VPC. The association determines which DNS queries that originate in the VPC are forwarded to your network. 
**/
export class ResolverRuleAssociation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ResolverRuleId" })
  resolverRuleId?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: ResolverRuleAssociationStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=StatusMessage" })
  statusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=VPCId" })
  vpcId?: string;
}
