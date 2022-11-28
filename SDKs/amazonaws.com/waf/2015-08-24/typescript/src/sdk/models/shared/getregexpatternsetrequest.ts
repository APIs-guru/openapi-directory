import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRegexPatternSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RegexPatternSetId" })
  regexPatternSetId: string;
}
