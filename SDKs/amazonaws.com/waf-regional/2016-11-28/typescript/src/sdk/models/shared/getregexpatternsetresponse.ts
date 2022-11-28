import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RegexPatternSet } from "./regexpatternset";



export class GetRegexPatternSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RegexPatternSet" })
  regexPatternSet?: RegexPatternSet;
}
