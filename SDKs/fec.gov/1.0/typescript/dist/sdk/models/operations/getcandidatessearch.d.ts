import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetCandidatesSearchCandidateStatusEnum {
    Unknown = "",
    C = "C",
    F = "F",
    N = "N",
    P = "P"
}
export declare enum GetCandidatesSearchIncumbentChallengeEnum {
    Unknown = "",
    I = "I",
    C = "C",
    O = "O"
}
export declare enum GetCandidatesSearchOfficeEnum {
    Unknown = "",
    H = "H",
    S = "S",
    P = "P"
}
export declare class GetCandidatesSearchQueryParams extends SpeakeasyBase {
    apiKey: string;
    candidateId?: string[];
    candidateStatus?: GetCandidatesSearchCandidateStatusEnum[];
    cycle?: number[];
    district?: string[];
    electionYear?: number[];
    federalFundsFlag?: boolean;
    hasRaisedFunds?: boolean;
    incumbentChallenge?: GetCandidatesSearchIncumbentChallengeEnum[];
    isActiveCandidate?: boolean;
    maxFirstFileDate?: Date;
    minFirstFileDate?: Date;
    name?: string[];
    office?: GetCandidatesSearchOfficeEnum[];
    page?: number;
    party?: string[];
    perPage?: number;
    q?: string[];
    sort?: string;
    sortHideNull?: boolean;
    sortNullOnly?: boolean;
    sortNullsLast?: boolean;
    state?: string[];
    year?: string;
}
export declare class GetCandidatesSearchRequest extends SpeakeasyBase {
    queryParams: GetCandidatesSearchQueryParams;
}
export declare class GetCandidatesSearchResponse extends SpeakeasyBase {
    candidatePage?: shared.CandidatePage;
    contentType: string;
    statusCode: number;
}
