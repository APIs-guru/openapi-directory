import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class FetchBoundariesSecurityOption1 extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class FetchBoundariesSecurityOption2 extends SpeakeasyBase {
    oauth2AuthorizationCode: shared.SchemeOauth2AuthorizationCode;
}
export declare class FetchBoundariesSecurity extends SpeakeasyBase {
    option1?: FetchBoundariesSecurityOption1;
    option2?: FetchBoundariesSecurityOption2;
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
