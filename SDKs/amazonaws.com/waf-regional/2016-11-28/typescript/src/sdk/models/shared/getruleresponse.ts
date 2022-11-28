import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Rule } from "./rule";



export class GetRuleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Rule" })
  rule?: Rule;
}
