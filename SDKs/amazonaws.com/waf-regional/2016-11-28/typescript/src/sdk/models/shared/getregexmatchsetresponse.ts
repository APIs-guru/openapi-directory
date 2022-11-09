import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RegexMatchSet } from "./regexmatchset";


export class GetRegexMatchSetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=RegexMatchSet" })
  regexMatchSet?: RegexMatchSet;
}
