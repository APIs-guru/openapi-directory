import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateRuleGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChangeToken" })
  changeToken?: string;
}
