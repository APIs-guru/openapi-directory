import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetCommunicationCostsSupportOpposeIndicatorEnum {
    S = "S",
    O = "O"
}
export declare class GetCommunicationCostsQueryParams extends SpeakeasyBase {
    apiKey: string;
    candidateId?: string[];
    committeeId?: string[];
    imageNumber?: string[];
    lineNumber?: string;
    maxAmount?: string;
    maxDate?: Date;
    maxImageNumber?: string;
    minAmount?: string;
    minDate?: Date;
    minImageNumber?: string;
    page?: number;
    perPage?: number;
    sort?: string;
    sortHideNull?: boolean;
    sortNullOnly?: boolean;
    sortNullsLast?: boolean;
    supportOpposeIndicator?: GetCommunicationCostsSupportOpposeIndicatorEnum[];
}
export declare class GetCommunicationCostsRequest extends SpeakeasyBase {
    queryParams: GetCommunicationCostsQueryParams;
}
export declare class GetCommunicationCostsResponse extends SpeakeasyBase {
    communicationCostPage?: shared.CommunicationCostPage;
    contentType: string;
    statusCode: number;
}
