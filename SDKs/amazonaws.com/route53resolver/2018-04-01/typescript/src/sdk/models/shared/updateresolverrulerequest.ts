import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResolverRuleConfig } from "./resolverruleconfig";


export class UpdateResolverRuleRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Config" })
  config: ResolverRuleConfig;

  @Metadata({ data: "json, name=ResolverRuleId" })
  resolverRuleId: string;
}
