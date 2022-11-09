import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RuleTypeOptionEnum } from "./ruletypeoptionenum";
import { Tag } from "./tag";
import { TargetAddress } from "./targetaddress";


export class CreateResolverRuleRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatorRequestId" })
  creatorRequestId: string;

  @Metadata({ data: "json, name=DomainName" })
  domainName: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=ResolverEndpointId" })
  resolverEndpointId?: string;

  @Metadata({ data: "json, name=RuleType" })
  ruleType: RuleTypeOptionEnum;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=TargetIps", elemType: shared.TargetAddress })
  targetIps?: TargetAddress[];
}
