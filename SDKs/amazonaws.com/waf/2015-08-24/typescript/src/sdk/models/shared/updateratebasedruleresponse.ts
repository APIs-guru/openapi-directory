import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateRateBasedRuleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChangeToken" })
  changeToken?: string;
}
