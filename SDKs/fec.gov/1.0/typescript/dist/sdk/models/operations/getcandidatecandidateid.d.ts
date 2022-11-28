import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCandidateCandidateIdPathParams extends SpeakeasyBase {
    candidateId: string;
}
export declare enum GetCandidateCandidateIdCandidateStatusEnum {
    Unknown = "",
    C = "C",
    F = "F",
    N = "N",
    P = "P"
}
export declare enum GetCandidateCandidateIdIncumbentChallengeEnum {
    Unknown = "",
    I = "I",
    C = "C",
    O = "O"
}
export declare enum GetCandidateCandidateIdOfficeEnum {
    Unknown = "",
    H = "H",
    S = "S",
    P = "P"
}
export declare class GetCandidateCandidateIdQueryParams extends SpeakeasyBase {
    apiKey: string;
    candidateStatus?: GetCandidateCandidateIdCandidateStatusEnum[];
    cycle?: number[];
    district?: string[];
    electionYear?: number[];
    federalFundsFlag?: boolean;
    hasRaisedFunds?: boolean;
    incumbentChallenge?: GetCandidateCandidateIdIncumbentChallengeEnum[];
    name?: string[];
    office?: GetCandidateCandidateIdOfficeEnum[];
    page?: number;
    party?: string[];
    perPage?: number;
    sort?: string;
    sortHideNull?: boolean;
    sortNullOnly?: boolean;
    sortNullsLast?: boolean;
    state?: string[];
    year?: string;
}
export declare class GetCandidateCandidateIdRequest extends SpeakeasyBase {
    pathParams: GetCandidateCandidateIdPathParams;
    queryParams: GetCandidateCandidateIdQueryParams;
}
export declare class GetCandidateCandidateIdResponse extends SpeakeasyBase {
    candidateDetailPage?: shared.CandidateDetailPage;
    contentType: string;
    statusCode: number;
}
