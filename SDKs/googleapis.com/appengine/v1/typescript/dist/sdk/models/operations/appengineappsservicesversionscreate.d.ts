import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppengineAppsServicesVersionsCreatePathParams extends SpeakeasyBase {
    appsId: string;
    servicesId: string;
}
export declare class AppengineAppsServicesVersionsCreateQueryParams extends SpeakeasyBase {
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
export declare class AppengineAppsServicesVersionsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsServicesVersionsCreateRequest extends SpeakeasyBase {
    pathParams: AppengineAppsServicesVersionsCreatePathParams;
    queryParams: AppengineAppsServicesVersionsCreateQueryParams;
    request?: shared.Version;
    security: AppengineAppsServicesVersionsCreateSecurity;
}
export declare class AppengineAppsServicesVersionsCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
