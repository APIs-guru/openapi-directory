import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteRegexPatternSetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChangeToken" })
  changeToken: string;

  @Metadata({ data: "json, name=RegexPatternSetId" })
  regexPatternSetId: string;
}
