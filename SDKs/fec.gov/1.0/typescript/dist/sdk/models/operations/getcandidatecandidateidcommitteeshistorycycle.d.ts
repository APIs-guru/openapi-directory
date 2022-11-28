import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCandidateCandidateIdCommitteesHistoryCyclePathParams extends SpeakeasyBase {
    candidateId: string;
    cycle: number;
}
export declare enum GetCandidateCandidateIdCommitteesHistoryCycleDesignationEnum {
    Unknown = "",
    A = "A",
    J = "J",
    P = "P",
    U = "U",
    B = "B",
    D = "D"
}
export declare class GetCandidateCandidateIdCommitteesHistoryCycleQueryParams extends SpeakeasyBase {
    apiKey: string;
    designation?: GetCandidateCandidateIdCommitteesHistoryCycleDesignationEnum[];
    electionFull?: boolean;
    page?: number;
    perPage?: number;
    sort?: string;
    sortHideNull?: boolean;
    sortNullOnly?: boolean;
    sortNullsLast?: boolean;
}
export declare class GetCandidateCandidateIdCommitteesHistoryCycleRequest extends SpeakeasyBase {
    pathParams: GetCandidateCandidateIdCommitteesHistoryCyclePathParams;
    queryParams: GetCandidateCandidateIdCommitteesHistoryCycleQueryParams;
}
export declare class GetCandidateCandidateIdCommitteesHistoryCycleResponse extends SpeakeasyBase {
    committeeHistoryPage?: shared.CommitteeHistoryPage;
    contentType: string;
    statusCode: number;
}
