import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRecallHistoryPathParams extends SpeakeasyBase {
    vin: string;
}
export declare class GetRecallHistoryQueryParams extends SpeakeasyBase {
    apiKey?: string;
    page?: number;
}
export declare class GetRecallHistoryRequest extends SpeakeasyBase {
    pathParams: GetRecallHistoryPathParams;
    queryParams: GetRecallHistoryQueryParams;
}
export declare class GetRecallHistoryResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    searchResponse?: shared.SearchResponse;
    statusCode: number;
}
