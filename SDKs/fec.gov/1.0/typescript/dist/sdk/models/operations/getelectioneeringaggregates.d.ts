import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetElectioneeringAggregatesQueryParams extends SpeakeasyBase {
    apiKey: string;
    candidateId?: string[];
    committeeId?: string[];
    cycle?: number[];
    page?: number;
    perPage?: number;
    sort?: string;
    sortHideNull?: boolean;
    sortNullOnly?: boolean;
    sortNullsLast?: boolean;
}
export declare class GetElectioneeringAggregatesRequest extends SpeakeasyBase {
    queryParams: GetElectioneeringAggregatesQueryParams;
}
export declare class GetElectioneeringAggregatesResponse extends SpeakeasyBase {
    contentType: string;
    electioneeringByCandidatePage?: shared.ElectioneeringByCandidatePage;
    statusCode: number;
}
