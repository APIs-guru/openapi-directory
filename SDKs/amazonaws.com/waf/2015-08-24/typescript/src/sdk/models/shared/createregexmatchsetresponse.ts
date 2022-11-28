import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RegexMatchSet } from "./regexmatchset";



export class CreateRegexMatchSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChangeToken" })
  changeToken?: string;

  @SpeakeasyMetadata({ data: "json, name=RegexMatchSet" })
  regexMatchSet?: RegexMatchSet;
}
