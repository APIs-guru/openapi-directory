import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCandidateCandidateIdTotalsPathParams extends SpeakeasyBase {
    candidateId: string;
}
export declare class GetCandidateCandidateIdTotalsQueryParams extends SpeakeasyBase {
    apiKey: string;
    cycle?: number[];
    electionFull?: boolean;
    page?: number;
    perPage?: number;
    sort?: string;
    sortHideNull?: boolean;
    sortNullOnly?: boolean;
    sortNullsLast?: boolean;
}
export declare class GetCandidateCandidateIdTotalsRequest extends SpeakeasyBase {
    pathParams: GetCandidateCandidateIdTotalsPathParams;
    queryParams: GetCandidateCandidateIdTotalsQueryParams;
}
export declare class GetCandidateCandidateIdTotalsResponse extends SpeakeasyBase {
    committeeTotalsPage?: shared.CommitteeTotalsPage;
    contentType: string;
    statusCode: number;
}
