import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteRegexMatchSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChangeToken" })
  changeToken: string;

  @SpeakeasyMetadata({ data: "json, name=RegexMatchSetId" })
  regexMatchSetId: string;
}
