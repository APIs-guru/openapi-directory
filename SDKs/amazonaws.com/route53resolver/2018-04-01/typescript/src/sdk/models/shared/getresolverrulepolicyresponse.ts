import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetResolverRulePolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResolverRulePolicy" })
  resolverRulePolicy?: string;
}
