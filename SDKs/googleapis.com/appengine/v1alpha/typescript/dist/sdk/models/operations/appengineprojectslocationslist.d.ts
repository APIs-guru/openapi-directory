import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AppengineProjectsLocationsListPathParams extends SpeakeasyBase {
    projectsId: string;
}
export declare class AppengineProjectsLocationsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AppengineProjectsLocationsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineProjectsLocationsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineProjectsLocationsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineProjectsLocationsListSecurity extends SpeakeasyBase {
    option1?: AppengineProjectsLocationsListSecurityOption1;
    option2?: AppengineProjectsLocationsListSecurityOption2;
    option3?: AppengineProjectsLocationsListSecurityOption3;
}
export declare class AppengineProjectsLocationsListRequest extends SpeakeasyBase {
    pathParams: AppengineProjectsLocationsListPathParams;
    queryParams: AppengineProjectsLocationsListQueryParams;
    security: AppengineProjectsLocationsListSecurity;
}
export declare class AppengineProjectsLocationsListResponse extends SpeakeasyBase {
    contentType: string;
    listLocationsResponse?: shared.ListLocationsResponse;
    statusCode: number;
}
