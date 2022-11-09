import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AutoMlSortByEnum } from "./automlsortbyenum";
import { AutoMlSortOrderEnum } from "./automlsortorderenum";
import { AutoMlJobStatusEnum } from "./automljobstatusenum";


export class ListAutoMlJobsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTimeAfter" })
  creationTimeAfter?: Date;

  @Metadata({ data: "json, name=CreationTimeBefore" })
  creationTimeBefore?: Date;

  @Metadata({ data: "json, name=LastModifiedTimeAfter" })
  lastModifiedTimeAfter?: Date;

  @Metadata({ data: "json, name=LastModifiedTimeBefore" })
  lastModifiedTimeBefore?: Date;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NameContains" })
  nameContains?: string;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=SortBy" })
  sortBy?: AutoMlSortByEnum;

  @Metadata({ data: "json, name=SortOrder" })
  sortOrder?: AutoMlSortOrderEnum;

  @Metadata({ data: "json, name=StatusEquals" })
  statusEquals?: AutoMlJobStatusEnum;
}
