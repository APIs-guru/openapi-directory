import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Rule } from "./rule";


export class CreateRuleResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChangeToken" })
  changeToken?: string;

  @Metadata({ data: "json, name=Rule" })
  rule?: Rule;
}
