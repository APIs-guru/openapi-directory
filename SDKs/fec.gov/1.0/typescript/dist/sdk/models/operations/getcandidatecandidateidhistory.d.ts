import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCandidateCandidateIdHistoryPathParams extends SpeakeasyBase {
    candidateId: string;
}
export declare class GetCandidateCandidateIdHistoryQueryParams extends SpeakeasyBase {
    apiKey: string;
    electionFull?: boolean;
    page?: number;
    perPage?: number;
    sort?: string;
    sortHideNull?: boolean;
    sortNullOnly?: boolean;
    sortNullsLast?: boolean;
}
export declare class GetCandidateCandidateIdHistoryRequest extends SpeakeasyBase {
    pathParams: GetCandidateCandidateIdHistoryPathParams;
    queryParams: GetCandidateCandidateIdHistoryQueryParams;
}
export declare class GetCandidateCandidateIdHistoryResponse extends SpeakeasyBase {
    candidateHistoryPage?: shared.CandidateHistoryPage;
    contentType: string;
    statusCode: number;
}
