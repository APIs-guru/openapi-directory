import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResolverRule } from "./resolverrule";



export class DeleteResolverRuleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResolverRule" })
  resolverRule?: ResolverRule;
}
