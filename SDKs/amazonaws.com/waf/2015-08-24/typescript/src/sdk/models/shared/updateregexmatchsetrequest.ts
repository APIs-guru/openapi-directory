import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RegexMatchSetUpdate } from "./regexmatchsetupdate";


export class UpdateRegexMatchSetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChangeToken" })
  changeToken: string;

  @Metadata({ data: "json, name=RegexMatchSetId" })
  regexMatchSetId: string;

  @Metadata({ data: "json, name=Updates", elemType: shared.RegexMatchSetUpdate })
  updates: RegexMatchSetUpdate[];
}
