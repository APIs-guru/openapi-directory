import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDeviceCodeIdSecurity extends SpeakeasyBase {
    oauthsecurity: shared.SchemeOauthsecurity;
}
export declare class GetDeviceCodeId401ApplicationJson extends SpeakeasyBase {
    error?: string;
    errorDescription?: string;
}
export declare class GetDeviceCodeIdRequest extends SpeakeasyBase {
    request?: any;
    security: GetDeviceCodeIdSecurity;
}
export declare class GetDeviceCodeIdResponse extends SpeakeasyBase {
    contentType: string;
    deviceAuthorizationCodeResponse?: shared.DeviceAuthorizationCodeResponse;
    getDeviceCodeId400ApplicationJsonOneOf?: any;
    getDeviceCodeId401ApplicationJsonObject?: GetDeviceCodeId401ApplicationJson;
    getDeviceCodeId500ApplicationJsonOneOf?: any;
    statusCode: number;
}
