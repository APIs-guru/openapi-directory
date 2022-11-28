import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidenterpriseDevicesForceReportUploadPathParams extends SpeakeasyBase {
    deviceId: string;
    enterpriseId: string;
    userId: string;
}
export declare class AndroidenterpriseDevicesForceReportUploadQueryParams extends SpeakeasyBase {
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
export declare class AndroidenterpriseDevicesForceReportUploadSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidenterpriseDevicesForceReportUploadRequest extends SpeakeasyBase {
    pathParams: AndroidenterpriseDevicesForceReportUploadPathParams;
    queryParams: AndroidenterpriseDevicesForceReportUploadQueryParams;
    security: AndroidenterpriseDevicesForceReportUploadSecurity;
}
export declare class AndroidenterpriseDevicesForceReportUploadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
