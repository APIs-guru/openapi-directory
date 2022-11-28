import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuleTypeOptionEnum } from "./ruletypeoptionenum";
import { Tag } from "./tag";
import { TargetAddress } from "./targetaddress";



export class CreateResolverRuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatorRequestId" })
  creatorRequestId: string;

  @SpeakeasyMetadata({ data: "json, name=DomainName" })
  domainName: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ResolverEndpointId" })
  resolverEndpointId?: string;

  @SpeakeasyMetadata({ data: "json, name=RuleType" })
  ruleType: RuleTypeOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=TargetIps", elemType: TargetAddress })
  targetIps?: TargetAddress[];
}
