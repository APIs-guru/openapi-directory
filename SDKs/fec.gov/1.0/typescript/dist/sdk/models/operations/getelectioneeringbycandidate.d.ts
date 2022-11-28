import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetElectioneeringByCandidateOfficeEnum {
    House = "house",
    Senate = "senate",
    President = "president"
}
export declare class GetElectioneeringByCandidateQueryParams extends SpeakeasyBase {
    apiKey: string;
    candidateId?: string[];
    cycle?: number[];
    district?: string;
    electionFull?: boolean;
    office?: GetElectioneeringByCandidateOfficeEnum;
    page?: number;
    perPage?: number;
    sort?: string;
    sortHideNull?: boolean;
    sortNullOnly?: boolean;
    sortNullsLast?: boolean;
    state?: string;
}
export declare class GetElectioneeringByCandidateRequest extends SpeakeasyBase {
    queryParams: GetElectioneeringByCandidateQueryParams;
}
export declare class GetElectioneeringByCandidateResponse extends SpeakeasyBase {
    contentType: string;
    electioneeringByCandidatePage?: shared.ElectioneeringByCandidatePage;
    statusCode: number;
}
