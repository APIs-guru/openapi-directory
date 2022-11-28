import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetCommunicationCostsByCandidateOfficeEnum {
    House = "house",
    Senate = "senate",
    President = "president"
}
export declare enum GetCommunicationCostsByCandidateSupportOpposeEnum {
    S = "S",
    O = "O"
}
export declare class GetCommunicationCostsByCandidateQueryParams extends SpeakeasyBase {
    apiKey: string;
    candidateId?: string[];
    cycle?: number[];
    district?: string;
    electionFull?: boolean;
    office?: GetCommunicationCostsByCandidateOfficeEnum;
    page?: number;
    perPage?: number;
    sort?: string;
    sortHideNull?: boolean;
    sortNullOnly?: boolean;
    sortNullsLast?: boolean;
    state?: string;
    supportOppose?: GetCommunicationCostsByCandidateSupportOpposeEnum;
}
export declare class GetCommunicationCostsByCandidateRequest extends SpeakeasyBase {
    queryParams: GetCommunicationCostsByCandidateQueryParams;
}
export declare class GetCommunicationCostsByCandidateResponse extends SpeakeasyBase {
    communicationCostByCandidatePage?: shared.CommunicationCostByCandidatePage;
    contentType: string;
    statusCode: number;
}
