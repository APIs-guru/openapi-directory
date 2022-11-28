import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppengineProjectsLocationsOperationsGetPathParams extends SpeakeasyBase {
    locationsId: string;
    operationsId: string;
    projectsId: string;
}
export declare class AppengineProjectsLocationsOperationsGetQueryParams extends SpeakeasyBase {
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
export declare class AppengineProjectsLocationsOperationsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineProjectsLocationsOperationsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineProjectsLocationsOperationsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineProjectsLocationsOperationsGetSecurity extends SpeakeasyBase {
    option1?: AppengineProjectsLocationsOperationsGetSecurityOption1;
    option2?: AppengineProjectsLocationsOperationsGetSecurityOption2;
    option3?: AppengineProjectsLocationsOperationsGetSecurityOption3;
}
export declare class AppengineProjectsLocationsOperationsGetRequest extends SpeakeasyBase {
    pathParams: AppengineProjectsLocationsOperationsGetPathParams;
    queryParams: AppengineProjectsLocationsOperationsGetQueryParams;
    security: AppengineProjectsLocationsOperationsGetSecurity;
}
export declare class AppengineProjectsLocationsOperationsGetResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
