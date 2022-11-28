import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidenterpriseDevicesGetPathParams extends SpeakeasyBase {
    deviceId: string;
    enterpriseId: string;
    userId: string;
}
export declare class AndroidenterpriseDevicesGetQueryParams extends SpeakeasyBase {
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
export declare class AndroidenterpriseDevicesGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidenterpriseDevicesGetRequest extends SpeakeasyBase {
    pathParams: AndroidenterpriseDevicesGetPathParams;
    queryParams: AndroidenterpriseDevicesGetQueryParams;
    security: AndroidenterpriseDevicesGetSecurity;
}
export declare class AndroidenterpriseDevicesGetResponse extends SpeakeasyBase {
    contentType: string;
    device?: shared.Device;
    statusCode: number;
}
