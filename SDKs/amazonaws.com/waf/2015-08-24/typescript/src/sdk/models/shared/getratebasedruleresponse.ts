import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RateBasedRule } from "./ratebasedrule";


export class GetRateBasedRuleResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Rule" })
  rule?: RateBasedRule;
}
