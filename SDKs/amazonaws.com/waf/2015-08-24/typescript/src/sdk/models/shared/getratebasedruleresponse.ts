import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RateBasedRule } from "./ratebasedrule";



export class GetRateBasedRuleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Rule" })
  rule?: RateBasedRule;
}
