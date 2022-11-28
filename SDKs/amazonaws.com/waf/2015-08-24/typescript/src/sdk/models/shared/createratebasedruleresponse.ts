import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RateBasedRule } from "./ratebasedrule";



export class CreateRateBasedRuleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChangeToken" })
  changeToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Rule" })
  rule?: RateBasedRule;
}
