import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TextTranslationJobFilter } from "./texttranslationjobfilter";



export class ListTextTranslationJobsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Filter" })
  filter?: TextTranslationJobFilter;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
