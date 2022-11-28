import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CandidateSortByEnum } from "./candidatesortbyenum";
import { AutoMlSortOrderEnum } from "./automlsortorderenum";
import { CandidateStatusEnum } from "./candidatestatusenum";



export class ListCandidatesForAutoMlJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutoMLJobName" })
  autoMlJobName: string;

  @SpeakeasyMetadata({ data: "json, name=CandidateNameEquals" })
  candidateNameEquals?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=SortBy" })
  sortBy?: CandidateSortByEnum;

  @SpeakeasyMetadata({ data: "json, name=SortOrder" })
  sortOrder?: AutoMlSortOrderEnum;

  @SpeakeasyMetadata({ data: "json, name=StatusEquals" })
  statusEquals?: CandidateStatusEnum;
}
