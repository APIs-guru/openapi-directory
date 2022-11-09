import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Rule } from "./rule";


export class GetRuleResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Rule" })
  rule?: Rule;
}
