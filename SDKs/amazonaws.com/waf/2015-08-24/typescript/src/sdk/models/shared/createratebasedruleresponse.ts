import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RateBasedRule } from "./ratebasedrule";


export class CreateRateBasedRuleResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChangeToken" })
  changeToken?: string;

  @Metadata({ data: "json, name=Rule" })
  rule?: RateBasedRule;
}
