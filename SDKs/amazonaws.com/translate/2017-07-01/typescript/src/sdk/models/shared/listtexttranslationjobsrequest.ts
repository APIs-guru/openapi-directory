import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TextTranslationJobFilter } from "./texttranslationjobfilter";


export class ListTextTranslationJobsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Filter" })
  filter?: TextTranslationJobFilter;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
