import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRegexMatchSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RegexMatchSetId" })
  regexMatchSetId: string;
}
