import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppengineProjectsLocationsApplicationsCreatePathParams extends SpeakeasyBase {
    locationsId: string;
    projectsId: string;
}
export declare class AppengineProjectsLocationsApplicationsCreateQueryParams extends SpeakeasyBase {
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
export declare class AppengineProjectsLocationsApplicationsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineProjectsLocationsApplicationsCreateRequest extends SpeakeasyBase {
    pathParams: AppengineProjectsLocationsApplicationsCreatePathParams;
    queryParams: AppengineProjectsLocationsApplicationsCreateQueryParams;
    request?: shared.ApplicationInput;
    security: AppengineProjectsLocationsApplicationsCreateSecurity;
}
export declare class AppengineProjectsLocationsApplicationsCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
