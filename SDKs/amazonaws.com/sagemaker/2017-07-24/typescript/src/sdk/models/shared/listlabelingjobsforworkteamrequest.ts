import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ListLabelingJobsForWorkteamSortByOptionsEnum } from "./listlabelingjobsforworkteamsortbyoptionsenum";
import { SortOrderEnum } from "./sortorderenum";


export class ListLabelingJobsForWorkteamRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTimeAfter" })
  creationTimeAfter?: Date;

  @Metadata({ data: "json, name=CreationTimeBefore" })
  creationTimeBefore?: Date;

  @Metadata({ data: "json, name=JobReferenceCodeContains" })
  jobReferenceCodeContains?: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=SortBy" })
  sortBy?: ListLabelingJobsForWorkteamSortByOptionsEnum;

  @Metadata({ data: "json, name=SortOrder" })
  sortOrder?: SortOrderEnum;

  @Metadata({ data: "json, name=WorkteamArn" })
  workteamArn: string;
}
