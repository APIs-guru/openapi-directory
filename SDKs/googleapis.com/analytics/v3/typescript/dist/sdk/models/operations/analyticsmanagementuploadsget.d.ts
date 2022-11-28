import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementUploadsGetPathParams extends SpeakeasyBase {
    accountId: string;
    customDataSourceId: string;
    uploadId: string;
    webPropertyId: string;
}
export declare class AnalyticsManagementUploadsGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AnalyticsManagementUploadsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementUploadsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementUploadsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementUploadsGetSecurity extends SpeakeasyBase {
    option1?: AnalyticsManagementUploadsGetSecurityOption1;
    option2?: AnalyticsManagementUploadsGetSecurityOption2;
    option3?: AnalyticsManagementUploadsGetSecurityOption3;
}
export declare class AnalyticsManagementUploadsGetRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementUploadsGetPathParams;
    queryParams: AnalyticsManagementUploadsGetQueryParams;
    security: AnalyticsManagementUploadsGetSecurity;
}
export declare class AnalyticsManagementUploadsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    upload?: shared.Upload;
}
