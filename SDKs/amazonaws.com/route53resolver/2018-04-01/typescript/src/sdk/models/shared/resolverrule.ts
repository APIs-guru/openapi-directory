import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RuleTypeOptionEnum } from "./ruletypeoptionenum";
import { ShareStatusEnum } from "./sharestatusenum";
import { ResolverRuleStatusEnum } from "./resolverrulestatusenum";
import { TargetAddress } from "./targetaddress";


// ResolverRule
/** 
 * For queries that originate in your VPC, detailed information about a Resolver rule, which specifies how to route DNS queries out of the VPC. The <code>ResolverRule</code> parameter appears in the response to a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverRule.html">CreateResolverRule</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteResolverRule.html">DeleteResolverRule</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverRule.html">GetResolverRule</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRules.html">ListResolverRules</a>, or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverRule.html">UpdateResolverRule</a> request.
**/
export class ResolverRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn?: string;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: string;

  @Metadata({ data: "json, name=CreatorRequestId" })
  creatorRequestId?: string;

  @Metadata({ data: "json, name=DomainName" })
  domainName?: string;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=ModificationTime" })
  modificationTime?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=OwnerId" })
  ownerId?: string;

  @Metadata({ data: "json, name=ResolverEndpointId" })
  resolverEndpointId?: string;

  @Metadata({ data: "json, name=RuleType" })
  ruleType?: RuleTypeOptionEnum;

  @Metadata({ data: "json, name=ShareStatus" })
  shareStatus?: ShareStatusEnum;

  @Metadata({ data: "json, name=Status" })
  status?: ResolverRuleStatusEnum;

  @Metadata({ data: "json, name=StatusMessage" })
  statusMessage?: string;

  @Metadata({ data: "json, name=TargetIps", elemType: shared.TargetAddress })
  targetIps?: TargetAddress[];
}
