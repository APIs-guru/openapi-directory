import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RegexMatchSetUpdate } from "./regexmatchsetupdate";



export class UpdateRegexMatchSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChangeToken" })
  changeToken: string;

  @SpeakeasyMetadata({ data: "json, name=RegexMatchSetId" })
  regexMatchSetId: string;

  @SpeakeasyMetadata({ data: "json, name=Updates", elemType: RegexMatchSetUpdate })
  updates: RegexMatchSetUpdate[];
}
