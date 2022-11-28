import { SpeakeasyBase } from "../../../internal/utils";
import { CandidateSortByEnum } from "./candidatesortbyenum";
import { AutoMlSortOrderEnum } from "./automlsortorderenum";
import { CandidateStatusEnum } from "./candidatestatusenum";
export declare class ListCandidatesForAutoMlJobRequest extends SpeakeasyBase {
    autoMlJobName: string;
    candidateNameEquals?: string;
    maxResults?: number;
    nextToken?: string;
    sortBy?: CandidateSortByEnum;
    sortOrder?: AutoMlSortOrderEnum;
    statusEquals?: CandidateStatusEnum;
}
