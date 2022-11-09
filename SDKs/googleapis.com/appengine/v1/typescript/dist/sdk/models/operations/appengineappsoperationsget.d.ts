import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AppengineAppsOperationsGetPathParams extends SpeakeasyBase {
    appsId: string;
    operationsId: string;
}
export declare class AppengineAppsOperationsGetQueryParams extends SpeakeasyBase {
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
export declare class AppengineAppsOperationsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsOperationsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsOperationsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsOperationsGetSecurity extends SpeakeasyBase {
    option1?: AppengineAppsOperationsGetSecurityOption1;
    option2?: AppengineAppsOperationsGetSecurityOption2;
    option3?: AppengineAppsOperationsGetSecurityOption3;
}
export declare class AppengineAppsOperationsGetRequest extends SpeakeasyBase {
    pathParams: AppengineAppsOperationsGetPathParams;
    queryParams: AppengineAppsOperationsGetQueryParams;
    security: AppengineAppsOperationsGetSecurity;
}
export declare class AppengineAppsOperationsGetResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
