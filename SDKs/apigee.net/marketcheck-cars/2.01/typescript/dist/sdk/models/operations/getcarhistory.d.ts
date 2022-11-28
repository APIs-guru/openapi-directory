import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCarHistoryPathParams extends SpeakeasyBase {
    vin: string;
}
export declare class GetCarHistoryQueryParams extends SpeakeasyBase {
    apiKey?: string;
    fields?: string;
    includeDuplicates?: boolean;
    page?: number;
}
export declare class GetCarHistoryRequest extends SpeakeasyBase {
    pathParams: GetCarHistoryPathParams;
    queryParams: GetCarHistoryQueryParams;
}
export declare class GetCarHistoryResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    historicalListings?: shared.HistoricalListing[];
    statusCode: number;
}
