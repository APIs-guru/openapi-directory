import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContentModerationSortByEnum } from "./contentmoderationsortbyenum";


export class GetContentModerationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobId" })
  jobId: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=SortBy" })
  sortBy?: ContentModerationSortByEnum;
}
