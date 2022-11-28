import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppengineAppsAuthorizedCertificatesCreatePathParams extends SpeakeasyBase {
    appsId: string;
}
export declare class AppengineAppsAuthorizedCertificatesCreateQueryParams extends SpeakeasyBase {
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
export declare class AppengineAppsAuthorizedCertificatesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsAuthorizedCertificatesCreateRequest extends SpeakeasyBase {
    pathParams: AppengineAppsAuthorizedCertificatesCreatePathParams;
    queryParams: AppengineAppsAuthorizedCertificatesCreateQueryParams;
    request?: shared.AuthorizedCertificate;
    security: AppengineAppsAuthorizedCertificatesCreateSecurity;
}
export declare class AppengineAppsAuthorizedCertificatesCreateResponse extends SpeakeasyBase {
    authorizedCertificate?: shared.AuthorizedCertificate;
    contentType: string;
    statusCode: number;
}
