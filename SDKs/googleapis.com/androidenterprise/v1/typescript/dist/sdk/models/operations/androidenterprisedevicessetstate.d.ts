import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidenterpriseDevicesSetStatePathParams extends SpeakeasyBase {
    deviceId: string;
    enterpriseId: string;
    userId: string;
}
export declare class AndroidenterpriseDevicesSetStateQueryParams extends SpeakeasyBase {
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
export declare class AndroidenterpriseDevicesSetStateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidenterpriseDevicesSetStateRequest extends SpeakeasyBase {
    pathParams: AndroidenterpriseDevicesSetStatePathParams;
    queryParams: AndroidenterpriseDevicesSetStateQueryParams;
    request?: shared.DeviceState;
    security: AndroidenterpriseDevicesSetStateSecurity;
}
export declare class AndroidenterpriseDevicesSetStateResponse extends SpeakeasyBase {
    contentType: string;
    deviceState?: shared.DeviceState;
    statusCode: number;
}
