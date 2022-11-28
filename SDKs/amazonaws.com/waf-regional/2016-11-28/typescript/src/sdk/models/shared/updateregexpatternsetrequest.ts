import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RegexPatternSetUpdate } from "./regexpatternsetupdate";



export class UpdateRegexPatternSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChangeToken" })
  changeToken: string;

  @SpeakeasyMetadata({ data: "json, name=RegexPatternSetId" })
  regexPatternSetId: string;

  @SpeakeasyMetadata({ data: "json, name=Updates", elemType: RegexPatternSetUpdate })
  updates: RegexPatternSetUpdate[];
}
