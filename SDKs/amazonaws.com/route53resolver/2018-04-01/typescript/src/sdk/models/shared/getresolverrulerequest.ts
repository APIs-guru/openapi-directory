import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetResolverRuleRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResolverRuleId" })
  resolverRuleId: string;
}
