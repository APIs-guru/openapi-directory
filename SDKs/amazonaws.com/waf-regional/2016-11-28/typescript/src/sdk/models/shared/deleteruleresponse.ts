import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteRuleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChangeToken" })
  changeToken?: string;
}
