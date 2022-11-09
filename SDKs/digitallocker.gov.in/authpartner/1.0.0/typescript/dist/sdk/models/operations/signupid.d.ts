import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SignUpIdSecurity extends SpeakeasyBase {
    oauthsecurity: shared.SchemeOauthsecurity;
}
export declare class SignUpIdRequest extends SpeakeasyBase {
    request?: any;
    security: SignUpIdSecurity;
}
export declare class SignUpId401ApplicationJson extends SpeakeasyBase {
    error?: string;
    errorDescription?: string;
}
export declare class SignUpId500ApplicationJson extends SpeakeasyBase {
    error?: any;
    errorDescription?: any;
}
export declare class SignUpIdResponse extends SpeakeasyBase {
    contentType: string;
    demoAuthResponse?: any;
    signUpId400ApplicationJsonOneOf?: any;
    signUpId401ApplicationJsonObject?: SignUpId401ApplicationJson;
    signUpId500ApplicationJsonObject?: SignUpId500ApplicationJson;
    statusCode: number;
}
