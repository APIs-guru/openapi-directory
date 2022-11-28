import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppengineAppsGetPathParams extends SpeakeasyBase {
    appsId: string;
}
export declare class AppengineAppsGetQueryParams extends SpeakeasyBase {
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
export declare class AppengineAppsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsGetSecurity extends SpeakeasyBase {
    option1?: AppengineAppsGetSecurityOption1;
    option2?: AppengineAppsGetSecurityOption2;
    option3?: AppengineAppsGetSecurityOption3;
}
export declare class AppengineAppsGetRequest extends SpeakeasyBase {
    pathParams: AppengineAppsGetPathParams;
    queryParams: AppengineAppsGetQueryParams;
    security: AppengineAppsGetSecurity;
}
export declare class AppengineAppsGetResponse extends SpeakeasyBase {
    application?: shared.Application;
    contentType: string;
    statusCode: number;
}
