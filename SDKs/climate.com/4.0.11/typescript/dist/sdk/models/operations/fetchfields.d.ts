import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class FetchFieldsQueryParams extends SpeakeasyBase {
    fieldName?: string;
}
export declare class FetchFieldsHeaders extends SpeakeasyBase {
    xLimit?: number;
    xNextToken?: string;
}
export declare class FetchFieldsSecurityOption1 extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class FetchFieldsSecurityOption2 extends SpeakeasyBase {
    oauth2AuthorizationCode: shared.SchemeOauth2AuthorizationCode;
}
export declare class FetchFieldsSecurity extends SpeakeasyBase {
    option1?: FetchFieldsSecurityOption1;
    option2?: FetchFieldsSecurityOption2;
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
