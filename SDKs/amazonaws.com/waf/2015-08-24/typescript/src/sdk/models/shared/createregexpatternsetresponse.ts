import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RegexPatternSet } from "./regexpatternset";



export class CreateRegexPatternSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChangeToken" })
  changeToken?: string;

  @SpeakeasyMetadata({ data: "json, name=RegexPatternSet" })
  regexPatternSet?: RegexPatternSet;
}
