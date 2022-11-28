import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteResolverRuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResolverRuleId" })
  resolverRuleId: string;
}
