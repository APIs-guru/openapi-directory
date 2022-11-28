import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateRegexPatternSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChangeToken" })
  changeToken?: string;
}
