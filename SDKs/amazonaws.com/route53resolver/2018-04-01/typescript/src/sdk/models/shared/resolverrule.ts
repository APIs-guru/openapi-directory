import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuleTypeOptionEnum } from "./ruletypeoptionenum";
import { ShareStatusEnum } from "./sharestatusenum";
import { ResolverRuleStatusEnum } from "./resolverrulestatusenum";
import { TargetAddress } from "./targetaddress";



// ResolverRule
/** 
 * For queries that originate in your VPC, detailed information about a Resolver rule, which specifies how to route DNS queries out of the VPC. The <code>ResolverRule</code> parameter appears in the response to a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverRule.html">CreateResolverRule</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteResolverRule.html">DeleteResolverRule</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverRule.html">GetResolverRule</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRules.html">ListResolverRules</a>, or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverRule.html">UpdateResolverRule</a> request.
**/
export class ResolverRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatorRequestId" })
  creatorRequestId?: string;

  @SpeakeasyMetadata({ data: "json, name=DomainName" })
  domainName?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=ModificationTime" })
  modificationTime?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=OwnerId" })
  ownerId?: string;

  @SpeakeasyMetadata({ data: "json, name=ResolverEndpointId" })
  resolverEndpointId?: string;

  @SpeakeasyMetadata({ data: "json, name=RuleType" })
  ruleType?: RuleTypeOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=ShareStatus" })
  shareStatus?: ShareStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: ResolverRuleStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=StatusMessage" })
  statusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=TargetIps", elemType: TargetAddress })
  targetIps?: TargetAddress[];
}
