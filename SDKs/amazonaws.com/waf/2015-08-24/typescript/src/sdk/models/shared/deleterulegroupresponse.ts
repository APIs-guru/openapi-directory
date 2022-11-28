import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteRuleGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChangeToken" })
  changeToken?: string;
}
