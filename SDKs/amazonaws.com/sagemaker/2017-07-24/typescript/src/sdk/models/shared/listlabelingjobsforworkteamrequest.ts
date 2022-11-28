import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ListLabelingJobsForWorkteamSortByOptionsEnum } from "./listlabelingjobsforworkteamsortbyoptionsenum";
import { SortOrderEnum } from "./sortorderenum";



export class ListLabelingJobsForWorkteamRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTimeAfter" })
  creationTimeAfter?: Date;

  @SpeakeasyMetadata({ data: "json, name=CreationTimeBefore" })
  creationTimeBefore?: Date;

  @SpeakeasyMetadata({ data: "json, name=JobReferenceCodeContains" })
  jobReferenceCodeContains?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=SortBy" })
  sortBy?: ListLabelingJobsForWorkteamSortByOptionsEnum;

  @SpeakeasyMetadata({ data: "json, name=SortOrder" })
  sortOrder?: SortOrderEnum;

  @SpeakeasyMetadata({ data: "json, name=WorkteamArn" })
  workteamArn: string;
}
