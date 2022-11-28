import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateRuleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChangeToken" })
  changeToken?: string;
}
