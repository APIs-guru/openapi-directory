import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResolverRule } from "./resolverrule";


export class GetResolverRuleResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResolverRule" })
  resolverRule?: ResolverRule;
}
