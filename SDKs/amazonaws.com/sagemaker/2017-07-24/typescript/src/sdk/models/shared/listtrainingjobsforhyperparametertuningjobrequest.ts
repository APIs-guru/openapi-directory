import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TrainingJobSortByOptionsEnum } from "./trainingjobsortbyoptionsenum";
import { SortOrderEnum } from "./sortorderenum";
import { TrainingJobStatusEnum } from "./trainingjobstatusenum";



export class ListTrainingJobsForHyperParameterTuningJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HyperParameterTuningJobName" })
  hyperParameterTuningJobName: string;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=SortBy" })
  sortBy?: TrainingJobSortByOptionsEnum;

  @SpeakeasyMetadata({ data: "json, name=SortOrder" })
  sortOrder?: SortOrderEnum;

  @SpeakeasyMetadata({ data: "json, name=StatusEquals" })
  statusEquals?: TrainingJobStatusEnum;
}
