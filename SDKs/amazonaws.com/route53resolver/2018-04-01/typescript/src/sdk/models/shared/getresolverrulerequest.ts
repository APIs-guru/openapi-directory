import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetResolverRuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResolverRuleId" })
  resolverRuleId: string;
}
