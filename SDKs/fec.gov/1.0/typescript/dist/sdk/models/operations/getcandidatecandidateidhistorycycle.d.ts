import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCandidateCandidateIdHistoryCyclePathParams extends SpeakeasyBase {
    candidateId: string;
    cycle: number;
}
export declare class GetCandidateCandidateIdHistoryCycleQueryParams extends SpeakeasyBase {
    apiKey: string;
    electionFull?: boolean;
    page?: number;
    perPage?: number;
    sort?: string;
    sortHideNull?: boolean;
    sortNullOnly?: boolean;
    sortNullsLast?: boolean;
}
export declare class GetCandidateCandidateIdHistoryCycleRequest extends SpeakeasyBase {
    pathParams: GetCandidateCandidateIdHistoryCyclePathParams;
    queryParams: GetCandidateCandidateIdHistoryCycleQueryParams;
}
export declare class GetCandidateCandidateIdHistoryCycleResponse extends SpeakeasyBase {
    candidateHistoryPage?: shared.CandidateHistoryPage;
    contentType: string;
    statusCode: number;
}
