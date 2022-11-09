import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ListEdgePackagingJobsSortByEnum } from "./listedgepackagingjobssortbyenum";
import { SortOrderEnum } from "./sortorderenum";
import { EdgePackagingJobStatusEnum } from "./edgepackagingjobstatusenum";


export class ListEdgePackagingJobsRequest extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=ModelNameContains" })
  modelNameContains?: string;

  @Metadata({ data: "json, name=NameContains" })
  nameContains?: string;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=SortBy" })
  sortBy?: ListEdgePackagingJobsSortByEnum;

  @Metadata({ data: "json, name=SortOrder" })
  sortOrder?: SortOrderEnum;

  @Metadata({ data: "json, name=StatusEquals" })
  statusEquals?: EdgePackagingJobStatusEnum;
}
