import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetTokenRevocationIdRequestBodyTokenTypeHintEnum {
    RefreshToken = "refresh_token",
    AccessToken = "access_token"
}
export declare class GetTokenRevocationIdRequestBody extends SpeakeasyBase {
    token: string;
    tokenTypeHint?: GetTokenRevocationIdRequestBodyTokenTypeHintEnum;
}
export declare class GetTokenRevocationIdSecurity extends SpeakeasyBase {
    oauthsecurity: shared.SchemeOauthsecurity;
}
export declare class GetTokenRevocationIdRequest extends SpeakeasyBase {
    request?: GetTokenRevocationIdRequestBody;
    security: GetTokenRevocationIdSecurity;
}
export declare class GetTokenRevocationIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
