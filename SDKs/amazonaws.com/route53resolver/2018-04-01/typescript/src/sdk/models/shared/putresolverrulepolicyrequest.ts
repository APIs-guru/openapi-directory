import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutResolverRulePolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn: string;

  @SpeakeasyMetadata({ data: "json, name=ResolverRulePolicy" })
  resolverRulePolicy: string;
}
