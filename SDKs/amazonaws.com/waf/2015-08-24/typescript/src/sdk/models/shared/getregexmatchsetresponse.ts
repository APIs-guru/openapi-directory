import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RegexMatchSet } from "./regexmatchset";



export class GetRegexMatchSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RegexMatchSet" })
  regexMatchSet?: RegexMatchSet;
}
