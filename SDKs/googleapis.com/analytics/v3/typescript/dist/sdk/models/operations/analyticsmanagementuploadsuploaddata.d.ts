import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementUploadsUploadDataPathParams extends SpeakeasyBase {
    accountId: string;
    customDataSourceId: string;
    webPropertyId: string;
}
export declare class AnalyticsManagementUploadsUploadDataQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AnalyticsManagementUploadsUploadDataSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementUploadsUploadDataSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementUploadsUploadDataSecurity extends SpeakeasyBase {
    option1?: AnalyticsManagementUploadsUploadDataSecurityOption1;
    option2?: AnalyticsManagementUploadsUploadDataSecurityOption2;
}
export declare class AnalyticsManagementUploadsUploadDataRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementUploadsUploadDataPathParams;
    queryParams: AnalyticsManagementUploadsUploadDataQueryParams;
    security: AnalyticsManagementUploadsUploadDataSecurity;
}
export declare class AnalyticsManagementUploadsUploadDataResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    upload?: shared.Upload;
}
