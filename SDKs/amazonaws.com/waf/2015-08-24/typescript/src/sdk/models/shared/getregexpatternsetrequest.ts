import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRegexPatternSetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=RegexPatternSetId" })
  regexPatternSetId: string;
}
