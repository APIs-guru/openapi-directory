import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidenterpriseDevicesListPathParams extends SpeakeasyBase {
    enterpriseId: string;
    userId: string;
}
export declare class AndroidenterpriseDevicesListQueryParams extends SpeakeasyBase {
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
export declare class AndroidenterpriseDevicesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidenterpriseDevicesListRequest extends SpeakeasyBase {
    pathParams: AndroidenterpriseDevicesListPathParams;
    queryParams: AndroidenterpriseDevicesListQueryParams;
    security: AndroidenterpriseDevicesListSecurity;
}
export declare class AndroidenterpriseDevicesListResponse extends SpeakeasyBase {
    contentType: string;
    devicesListResponse?: shared.DevicesListResponse;
    statusCode: number;
}
