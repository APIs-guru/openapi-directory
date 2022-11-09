import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RegexMatchSet } from "./regexmatchset";


export class CreateRegexMatchSetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChangeToken" })
  changeToken?: string;

  @Metadata({ data: "json, name=RegexMatchSet" })
  regexMatchSet?: RegexMatchSet;
}
