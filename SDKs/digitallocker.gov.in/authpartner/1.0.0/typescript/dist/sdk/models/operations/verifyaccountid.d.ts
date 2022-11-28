import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VerifyAccountIdSecurity extends SpeakeasyBase {
    oauthsecurity: shared.SchemeOauthsecurity;
}
export declare class VerifyAccountId400ApplicationJson extends SpeakeasyBase {
    error?: any;
    errorDescription?: any;
}
export declare class VerifyAccountId401ApplicationJson extends SpeakeasyBase {
    error?: string;
    errorDescription?: string;
}
export declare class VerifyAccountId500ApplicationJson extends SpeakeasyBase {
    error?: any;
    errorDescription?: any;
}
export declare class VerifyAccountIdRequest extends SpeakeasyBase {
    request?: any;
    security: VerifyAccountIdSecurity;
}
export declare class VerifyAccountIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    verifyAccountId400ApplicationJsonObject?: VerifyAccountId400ApplicationJson;
    verifyAccountId401ApplicationJsonObject?: VerifyAccountId401ApplicationJson;
    verifyAccountId500ApplicationJsonObject?: VerifyAccountId500ApplicationJson;
    verifyAccountResponse?: shared.VerifyAccountResponse;
}
