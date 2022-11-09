import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RegexPatternSet } from "./regexpatternset";


export class GetRegexPatternSetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=RegexPatternSet" })
  regexPatternSet?: RegexPatternSet;
}
