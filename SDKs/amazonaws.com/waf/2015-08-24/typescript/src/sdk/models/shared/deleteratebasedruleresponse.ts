import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteRateBasedRuleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChangeToken" })
  changeToken?: string;
}
