import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FetchFieldsQueryParams extends SpeakeasyBase {
    fieldName?: string;
}
export declare class FetchFieldsHeaders extends SpeakeasyBase {
    xLimit?: number;
    xNextToken?: string;
}
export declare class FetchFieldsSecurity extends SpeakeasyBase {
    apiKey?: shared.SchemeApiKey;
    oauth2AuthorizationCode?: shared.SchemeOauth2AuthorizationCode;
}
export declare class FetchFieldsRequest extends SpeakeasyBase {
    queryParams: FetchFieldsQueryParams;
    headers: FetchFieldsHeaders;
    security: FetchFieldsSecurity;
}
export declare class FetchFieldsResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    error?: shared.Error;
    fields?: any;
    headers: Map<string, string[]>;
    statusCode: number;
}
