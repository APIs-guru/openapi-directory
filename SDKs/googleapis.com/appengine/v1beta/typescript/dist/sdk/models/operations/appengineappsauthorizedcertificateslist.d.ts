import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AppengineAppsAuthorizedCertificatesListPathParams extends SpeakeasyBase {
    appsId: string;
}
export declare enum AppengineAppsAuthorizedCertificatesListViewEnum {
    BasicCertificate = "BASIC_CERTIFICATE",
    FullCertificate = "FULL_CERTIFICATE"
}
export declare class AppengineAppsAuthorizedCertificatesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    view?: AppengineAppsAuthorizedCertificatesListViewEnum;
}
export declare class AppengineAppsAuthorizedCertificatesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsAuthorizedCertificatesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsAuthorizedCertificatesListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsAuthorizedCertificatesListSecurity extends SpeakeasyBase {
    option1?: AppengineAppsAuthorizedCertificatesListSecurityOption1;
    option2?: AppengineAppsAuthorizedCertificatesListSecurityOption2;
    option3?: AppengineAppsAuthorizedCertificatesListSecurityOption3;
}
export declare class AppengineAppsAuthorizedCertificatesListRequest extends SpeakeasyBase {
    pathParams: AppengineAppsAuthorizedCertificatesListPathParams;
    queryParams: AppengineAppsAuthorizedCertificatesListQueryParams;
    security: AppengineAppsAuthorizedCertificatesListSecurity;
}
export declare class AppengineAppsAuthorizedCertificatesListResponse extends SpeakeasyBase {
    contentType: string;
    listAuthorizedCertificatesResponse?: shared.ListAuthorizedCertificatesResponse;
    statusCode: number;
}
