import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuleUpdate } from "./ruleupdate";



export class UpdateRateBasedRuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChangeToken" })
  changeToken: string;

  @SpeakeasyMetadata({ data: "json, name=RateLimit" })
  rateLimit: number;

  @SpeakeasyMetadata({ data: "json, name=RuleId" })
  ruleId: string;

  @SpeakeasyMetadata({ data: "json, name=Updates", elemType: RuleUpdate })
  updates: RuleUpdate[];
}
