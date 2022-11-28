import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetCandidatesTotalsOfficeEnum {
    Unknown = "",
    H = "H",
    S = "S",
    P = "P"
}
export declare class GetCandidatesTotalsQueryParams extends SpeakeasyBase {
    apiKey: string;
    candidateId?: string[];
    cycle?: number[];
    district?: string[];
    electionFull?: boolean;
    electionYear?: number[];
    federalFundsFlag?: boolean;
    hasRaisedFunds?: boolean;
    isActiveCandidate?: boolean;
    maxCashOnHandEndPeriod?: string;
    maxDebtsOwedByCommittee?: string;
    maxDisbursements?: string;
    maxReceipts?: string;
    minCashOnHandEndPeriod?: string;
    minDebtsOwedByCommittee?: string;
    minDisbursements?: string;
    minReceipts?: string;
    office?: GetCandidatesTotalsOfficeEnum[];
    page?: number;
    party?: string[];
    perPage?: number;
    q?: string[];
    sort?: string;
    sortHideNull?: boolean;
    sortNullOnly?: boolean;
    sortNullsLast?: boolean;
    state?: string[];
}
export declare class GetCandidatesTotalsRequest extends SpeakeasyBase {
    queryParams: GetCandidatesTotalsQueryParams;
}
export declare class GetCandidatesTotalsResponse extends SpeakeasyBase {
    candidateHistoryTotalPage?: shared.CandidateHistoryTotalPage;
    contentType: string;
    statusCode: number;
}
