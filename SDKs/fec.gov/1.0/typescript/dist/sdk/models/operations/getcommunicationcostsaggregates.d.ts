import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetCommunicationCostsAggregatesSupportOpposeIndicatorEnum {
    S = "S",
    O = "O"
}
export declare class GetCommunicationCostsAggregatesQueryParams extends SpeakeasyBase {
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
    supportOpposeIndicator?: GetCommunicationCostsAggregatesSupportOpposeIndicatorEnum;
}
export declare class GetCommunicationCostsAggregatesRequest extends SpeakeasyBase {
    queryParams: GetCommunicationCostsAggregatesQueryParams;
}
export declare class GetCommunicationCostsAggregatesResponse extends SpeakeasyBase {
    communicationCostByCandidatePage?: shared.CommunicationCostByCandidatePage;
    contentType: string;
    statusCode: number;
}
