import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CelebrityRecognitionSortByEnum } from "./celebrityrecognitionsortbyenum";


export class GetCelebrityRecognitionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobId" })
  jobId: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=SortBy" })
  sortBy?: CelebrityRecognitionSortByEnum;
}
