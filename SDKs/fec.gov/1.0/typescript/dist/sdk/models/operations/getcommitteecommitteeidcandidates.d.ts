import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCommitteeCommitteeIdCandidatesPathParams extends SpeakeasyBase {
    committeeId: string;
}
export declare enum GetCommitteeCommitteeIdCandidatesCandidateStatusEnum {
    Unknown = "",
    C = "C",
    F = "F",
    N = "N",
    P = "P"
}
export declare enum GetCommitteeCommitteeIdCandidatesIncumbentChallengeEnum {
    Unknown = "",
    I = "I",
    C = "C",
    O = "O"
}
export declare enum GetCommitteeCommitteeIdCandidatesOfficeEnum {
    Unknown = "",
    H = "H",
    S = "S",
    P = "P"
}
export declare class GetCommitteeCommitteeIdCandidatesQueryParams extends SpeakeasyBase {
    apiKey: string;
    candidateStatus?: GetCommitteeCommitteeIdCandidatesCandidateStatusEnum[];
    cycle?: number[];
    district?: string[];
    electionYear?: number[];
    federalFundsFlag?: boolean;
    hasRaisedFunds?: boolean;
    incumbentChallenge?: GetCommitteeCommitteeIdCandidatesIncumbentChallengeEnum[];
    name?: string[];
    office?: GetCommitteeCommitteeIdCandidatesOfficeEnum[];
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
export declare class GetCommitteeCommitteeIdCandidatesRequest extends SpeakeasyBase {
    pathParams: GetCommitteeCommitteeIdCandidatesPathParams;
    queryParams: GetCommitteeCommitteeIdCandidatesQueryParams;
}
export declare class GetCommitteeCommitteeIdCandidatesResponse extends SpeakeasyBase {
    candidateDetailPage?: shared.CandidateDetailPage;
    contentType: string;
    statusCode: number;
}
