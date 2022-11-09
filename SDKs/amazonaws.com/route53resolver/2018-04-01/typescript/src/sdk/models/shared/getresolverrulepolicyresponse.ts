import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetResolverRulePolicyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResolverRulePolicy" })
  resolverRulePolicy?: string;
}
