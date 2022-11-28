import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCommitteeCommitteeIdCandidatesHistoryCyclePathParams extends SpeakeasyBase {
    committeeId: string;
    cycle: number;
}
export declare class GetCommitteeCommitteeIdCandidatesHistoryCycleQueryParams extends SpeakeasyBase {
    apiKey: string;
    electionFull?: boolean;
    page?: number;
    perPage?: number;
    sort?: string;
    sortHideNull?: boolean;
    sortNullOnly?: boolean;
    sortNullsLast?: boolean;
}
export declare class GetCommitteeCommitteeIdCandidatesHistoryCycleRequest extends SpeakeasyBase {
    pathParams: GetCommitteeCommitteeIdCandidatesHistoryCyclePathParams;
    queryParams: GetCommitteeCommitteeIdCandidatesHistoryCycleQueryParams;
}
export declare class GetCommitteeCommitteeIdCandidatesHistoryCycleResponse extends SpeakeasyBase {
    candidateHistoryPage?: shared.CandidateHistoryPage;
    contentType: string;
    statusCode: number;
}
