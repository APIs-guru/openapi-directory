import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RegexPatternSet } from "./regexpatternset";


export class CreateRegexPatternSetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChangeToken" })
  changeToken?: string;

  @Metadata({ data: "json, name=RegexPatternSet" })
  regexPatternSet?: RegexPatternSet;
}
