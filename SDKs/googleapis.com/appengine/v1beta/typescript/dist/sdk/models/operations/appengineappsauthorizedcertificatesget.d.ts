import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppengineAppsAuthorizedCertificatesGetPathParams extends SpeakeasyBase {
    appsId: string;
    authorizedCertificatesId: string;
}
export declare enum AppengineAppsAuthorizedCertificatesGetViewEnum {
    BasicCertificate = "BASIC_CERTIFICATE",
    FullCertificate = "FULL_CERTIFICATE"
}
export declare class AppengineAppsAuthorizedCertificatesGetQueryParams extends SpeakeasyBase {
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
    view?: AppengineAppsAuthorizedCertificatesGetViewEnum;
}
export declare class AppengineAppsAuthorizedCertificatesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsAuthorizedCertificatesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsAuthorizedCertificatesGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsAuthorizedCertificatesGetSecurity extends SpeakeasyBase {
    option1?: AppengineAppsAuthorizedCertificatesGetSecurityOption1;
    option2?: AppengineAppsAuthorizedCertificatesGetSecurityOption2;
    option3?: AppengineAppsAuthorizedCertificatesGetSecurityOption3;
}
export declare class AppengineAppsAuthorizedCertificatesGetRequest extends SpeakeasyBase {
    pathParams: AppengineAppsAuthorizedCertificatesGetPathParams;
    queryParams: AppengineAppsAuthorizedCertificatesGetQueryParams;
    security: AppengineAppsAuthorizedCertificatesGetSecurity;
}
export declare class AppengineAppsAuthorizedCertificatesGetResponse extends SpeakeasyBase {
    authorizedCertificate?: shared.AuthorizedCertificate;
    contentType: string;
    statusCode: number;
}
