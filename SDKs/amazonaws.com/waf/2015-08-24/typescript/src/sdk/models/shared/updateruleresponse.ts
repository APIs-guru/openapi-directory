import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateRuleResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChangeToken" })
  changeToken?: string;
}
