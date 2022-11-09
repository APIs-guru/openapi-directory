import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AppengineAppsAuthorizedCertificatesDeletePathParams extends SpeakeasyBase {
    appsId: string;
    authorizedCertificatesId: string;
}
export declare class AppengineAppsAuthorizedCertificatesDeleteQueryParams extends SpeakeasyBase {
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
export declare class AppengineAppsAuthorizedCertificatesDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsAuthorizedCertificatesDeleteRequest extends SpeakeasyBase {
    pathParams: AppengineAppsAuthorizedCertificatesDeletePathParams;
    queryParams: AppengineAppsAuthorizedCertificatesDeleteQueryParams;
    security: AppengineAppsAuthorizedCertificatesDeleteSecurity;
}
export declare class AppengineAppsAuthorizedCertificatesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
