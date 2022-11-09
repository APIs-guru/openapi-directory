import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRegexMatchSetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=RegexMatchSetId" })
  regexMatchSetId: string;
}
