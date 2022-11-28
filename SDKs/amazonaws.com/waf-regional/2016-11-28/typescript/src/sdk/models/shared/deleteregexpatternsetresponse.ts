import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteRegexPatternSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChangeToken" })
  changeToken?: string;
}
