import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCandidateCandidateIdCommitteesHistoryPathParams extends SpeakeasyBase {
    candidateId: string;
}
export declare enum GetCandidateCandidateIdCommitteesHistoryDesignationEnum {
    Unknown = "",
    A = "A",
    J = "J",
    P = "P",
    U = "U",
    B = "B",
    D = "D"
}
export declare class GetCandidateCandidateIdCommitteesHistoryQueryParams extends SpeakeasyBase {
    apiKey: string;
    designation?: GetCandidateCandidateIdCommitteesHistoryDesignationEnum[];
    electionFull?: boolean;
    page?: number;
    perPage?: number;
    sort?: string;
    sortHideNull?: boolean;
    sortNullOnly?: boolean;
    sortNullsLast?: boolean;
}
export declare class GetCandidateCandidateIdCommitteesHistoryRequest extends SpeakeasyBase {
    pathParams: GetCandidateCandidateIdCommitteesHistoryPathParams;
    queryParams: GetCandidateCandidateIdCommitteesHistoryQueryParams;
}
export declare class GetCandidateCandidateIdCommitteesHistoryResponse extends SpeakeasyBase {
    committeeHistoryPage?: shared.CommitteeHistoryPage;
    contentType: string;
    statusCode: number;
}
