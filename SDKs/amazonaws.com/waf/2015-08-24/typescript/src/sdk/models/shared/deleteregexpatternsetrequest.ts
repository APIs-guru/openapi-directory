import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteRegexPatternSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChangeToken" })
  changeToken: string;

  @SpeakeasyMetadata({ data: "json, name=RegexPatternSetId" })
  regexPatternSetId: string;
}
