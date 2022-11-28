import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidenterpriseDevicesGetStatePathParams extends SpeakeasyBase {
    deviceId: string;
    enterpriseId: string;
    userId: string;
}
export declare class AndroidenterpriseDevicesGetStateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AndroidenterpriseDevicesGetStateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidenterpriseDevicesGetStateRequest extends SpeakeasyBase {
    pathParams: AndroidenterpriseDevicesGetStatePathParams;
    queryParams: AndroidenterpriseDevicesGetStateQueryParams;
    security: AndroidenterpriseDevicesGetStateSecurity;
}
export declare class AndroidenterpriseDevicesGetStateResponse extends SpeakeasyBase {
    contentType: string;
    deviceState?: shared.DeviceState;
    statusCode: number;
}
