import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FetchBoundariesSecurity extends SpeakeasyBase {
    apiKey?: shared.SchemeApiKey;
    oauth2AuthorizationCode?: shared.SchemeOauth2AuthorizationCode;
}
export declare class FetchBoundariesRequest extends SpeakeasyBase {
    request?: shared.BoundariesQuery;
    security: FetchBoundariesSecurity;
}
export declare class FetchBoundariesResponse extends SpeakeasyBase {
    boundaries?: any;
    contentType: string;
    error?: shared.Error;
    headers: Map<string, string[]>;
    statusCode: number;
}
