import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCommunicationCostsTotalsByCandidateQueryParams extends SpeakeasyBase {
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
export declare class GetCommunicationCostsTotalsByCandidateRequest extends SpeakeasyBase {
    queryParams: GetCommunicationCostsTotalsByCandidateQueryParams;
}
export declare class GetCommunicationCostsTotalsByCandidateResponse extends SpeakeasyBase {
    ccTotalsByCandidatePage?: shared.CcTotalsByCandidatePage;
    contentType: string;
    statusCode: number;
}
