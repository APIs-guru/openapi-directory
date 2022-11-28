import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResolverRuleConfig } from "./resolverruleconfig";



export class UpdateResolverRuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Config" })
  config: ResolverRuleConfig;

  @SpeakeasyMetadata({ data: "json, name=ResolverRuleId" })
  resolverRuleId: string;
}
