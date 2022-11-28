import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSearchQueryParams extends SpeakeasyBase {
    q: string;
}
export declare class GetSearchSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetSearchRequest extends SpeakeasyBase {
    queryParams: GetSearchQueryParams;
    security: GetSearchSecurity;
}
export declare class GetSearchResponse extends SpeakeasyBase {
    contentType: string;
    getSearch200ApplicationJsonAny?: any;
    headers: Map<string, string[]>;
    statusCode: number;
}
