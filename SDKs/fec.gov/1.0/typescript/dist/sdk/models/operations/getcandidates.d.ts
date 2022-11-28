import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetCandidatesCandidateStatusEnum {
    Unknown = "",
    C = "C",
    F = "F",
    N = "N",
    P = "P"
}
export declare enum GetCandidatesIncumbentChallengeEnum {
    Unknown = "",
    I = "I",
    C = "C",
    O = "O"
}
export declare enum GetCandidatesOfficeEnum {
    Unknown = "",
    H = "H",
    S = "S",
    P = "P"
}
export declare class GetCandidatesQueryParams extends SpeakeasyBase {
    apiKey: string;
    candidateId?: string[];
    candidateStatus?: GetCandidatesCandidateStatusEnum[];
    cycle?: number[];
    district?: string[];
    electionYear?: number[];
    federalFundsFlag?: boolean;
    hasRaisedFunds?: boolean;
    incumbentChallenge?: GetCandidatesIncumbentChallengeEnum[];
    isActiveCandidate?: boolean;
    maxFirstFileDate?: Date;
    minFirstFileDate?: Date;
    name?: string[];
    office?: GetCandidatesOfficeEnum[];
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
export declare class GetCandidatesRequest extends SpeakeasyBase {
    queryParams: GetCandidatesQueryParams;
}
export declare class GetCandidatesResponse extends SpeakeasyBase {
    candidatePage?: shared.CandidatePage;
    contentType: string;
    statusCode: number;
}
