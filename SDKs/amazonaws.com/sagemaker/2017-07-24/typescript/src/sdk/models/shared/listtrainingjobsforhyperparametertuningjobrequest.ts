import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TrainingJobSortByOptionsEnum } from "./trainingjobsortbyoptionsenum";
import { SortOrderEnum } from "./sortorderenum";
import { TrainingJobStatusEnum } from "./trainingjobstatusenum";


export class ListTrainingJobsForHyperParameterTuningJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=HyperParameterTuningJobName" })
  hyperParameterTuningJobName: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=SortBy" })
  sortBy?: TrainingJobSortByOptionsEnum;

  @Metadata({ data: "json, name=SortOrder" })
  sortOrder?: SortOrderEnum;

  @Metadata({ data: "json, name=StatusEquals" })
  statusEquals?: TrainingJobStatusEnum;
}
