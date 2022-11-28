import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RevokeOAuthTokenSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class RevokeOAuthTokenRequest extends SpeakeasyBase {
    security: RevokeOAuthTokenSecurity;
}
export declare class RevokeOAuthTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
