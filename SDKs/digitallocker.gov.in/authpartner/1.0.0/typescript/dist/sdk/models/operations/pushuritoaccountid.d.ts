import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PushUriToAccountIdSecurity extends SpeakeasyBase {
    oauthsecurity: shared.SchemeOauthsecurity;
}
export declare class PushUriToAccountIdRequest extends SpeakeasyBase {
    request?: any;
    security: PushUriToAccountIdSecurity;
}
export declare class PushUriToAccountId400ApplicationJson extends SpeakeasyBase {
    error?: string;
    errorDescription?: string;
}
export declare class PushUriToAccountId401ApplicationJson extends SpeakeasyBase {
    error?: string;
    errorDescription?: string;
}
export declare class PushUriToAccountId404ApplicationJson extends SpeakeasyBase {
    error?: string;
    errorDescription?: string;
}
export declare class PushUriToAccountId500ApplicationJson extends SpeakeasyBase {
    error?: string;
    errorDescription?: string;
}
export declare class PushUriToAccountIdResponse extends SpeakeasyBase {
    contentType: string;
    pushUriToAccountId400ApplicationJsonObject?: PushUriToAccountId400ApplicationJson;
    pushUriToAccountId401ApplicationJsonObject?: PushUriToAccountId401ApplicationJson;
    pushUriToAccountId404ApplicationJsonObject?: PushUriToAccountId404ApplicationJson;
    pushUriToAccountId500ApplicationJsonObject?: PushUriToAccountId500ApplicationJson;
    sample?: any;
    statusCode: number;
}
