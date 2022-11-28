import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCommitteeCommitteeIdCandidatesHistoryPathParams extends SpeakeasyBase {
    committeeId: string;
}
export declare class GetCommitteeCommitteeIdCandidatesHistoryQueryParams extends SpeakeasyBase {
    apiKey: string;
    electionFull?: boolean;
    page?: number;
    perPage?: number;
    sort?: string;
    sortHideNull?: boolean;
    sortNullOnly?: boolean;
    sortNullsLast?: boolean;
}
export declare class GetCommitteeCommitteeIdCandidatesHistoryRequest extends SpeakeasyBase {
    pathParams: GetCommitteeCommitteeIdCandidatesHistoryPathParams;
    queryParams: GetCommitteeCommitteeIdCandidatesHistoryQueryParams;
}
export declare class GetCommitteeCommitteeIdCandidatesHistoryResponse extends SpeakeasyBase {
    candidateHistoryPage?: shared.CandidateHistoryPage;
    contentType: string;
    statusCode: number;
}
