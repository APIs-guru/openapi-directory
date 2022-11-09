import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RuleUpdate } from "./ruleupdate";


export class UpdateRateBasedRuleRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChangeToken" })
  changeToken: string;

  @Metadata({ data: "json, name=RateLimit" })
  rateLimit: number;

  @Metadata({ data: "json, name=RuleId" })
  ruleId: string;

  @Metadata({ data: "json, name=Updates", elemType: shared.RuleUpdate })
  updates: RuleUpdate[];
}
