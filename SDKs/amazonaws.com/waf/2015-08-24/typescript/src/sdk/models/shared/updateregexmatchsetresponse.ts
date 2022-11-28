import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateRegexMatchSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChangeToken" })
  changeToken?: string;
}
