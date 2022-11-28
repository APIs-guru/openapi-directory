import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementUploadsDeleteUploadDataPathParams extends SpeakeasyBase {
    accountId: string;
    customDataSourceId: string;
    webPropertyId: string;
}
export declare class AnalyticsManagementUploadsDeleteUploadDataQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AnalyticsManagementUploadsDeleteUploadDataSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementUploadsDeleteUploadDataSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementUploadsDeleteUploadDataSecurity extends SpeakeasyBase {
    option1?: AnalyticsManagementUploadsDeleteUploadDataSecurityOption1;
    option2?: AnalyticsManagementUploadsDeleteUploadDataSecurityOption2;
}
export declare class AnalyticsManagementUploadsDeleteUploadDataRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementUploadsDeleteUploadDataPathParams;
    queryParams: AnalyticsManagementUploadsDeleteUploadDataQueryParams;
    request?: shared.AnalyticsDataimportDeleteUploadDataRequest;
    security: AnalyticsManagementUploadsDeleteUploadDataSecurity;
}
export declare class AnalyticsManagementUploadsDeleteUploadDataResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
