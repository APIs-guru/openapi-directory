import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CandidateSortByEnum } from "./candidatesortbyenum";
import { AutoMlSortOrderEnum } from "./automlsortorderenum";
import { CandidateStatusEnum } from "./candidatestatusenum";


export class ListCandidatesForAutoMlJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AutoMLJobName" })
  autoMlJobName: string;

  @Metadata({ data: "json, name=CandidateNameEquals" })
  candidateNameEquals?: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=SortBy" })
  sortBy?: CandidateSortByEnum;

  @Metadata({ data: "json, name=SortOrder" })
  sortOrder?: AutoMlSortOrderEnum;

  @Metadata({ data: "json, name=StatusEquals" })
  statusEquals?: CandidateStatusEnum;
}
