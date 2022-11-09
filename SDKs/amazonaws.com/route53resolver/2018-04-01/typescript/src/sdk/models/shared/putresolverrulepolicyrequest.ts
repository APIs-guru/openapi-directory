import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutResolverRulePolicyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn: string;

  @Metadata({ data: "json, name=ResolverRulePolicy" })
  resolverRulePolicy: string;
}
