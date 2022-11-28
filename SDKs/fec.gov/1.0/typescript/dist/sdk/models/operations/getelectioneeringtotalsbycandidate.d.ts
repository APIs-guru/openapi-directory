import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetElectioneeringTotalsByCandidateQueryParams extends SpeakeasyBase {
    apiKey: string;
    candidateId?: string[];
    cycle?: number[];
    electionFull?: boolean;
    page?: number;
    perPage?: number;
    sort?: string;
    sortHideNull?: boolean;
    sortNullOnly?: boolean;
    sortNullsLast?: boolean;
}
export declare class GetElectioneeringTotalsByCandidateRequest extends SpeakeasyBase {
    queryParams: GetElectioneeringTotalsByCandidateQueryParams;
}
export declare class GetElectioneeringTotalsByCandidateResponse extends SpeakeasyBase {
    contentType: string;
    ecTotalsByCandidatePage?: shared.EcTotalsByCandidatePage;
    statusCode: number;
}
