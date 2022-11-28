import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AutomlProjectsLocationsTestIamPermissionsPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class AutomlProjectsLocationsTestIamPermissionsQueryParams extends SpeakeasyBase {
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
export declare class AutomlProjectsLocationsTestIamPermissionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AutomlProjectsLocationsTestIamPermissionsRequest extends SpeakeasyBase {
    pathParams: AutomlProjectsLocationsTestIamPermissionsPathParams;
    queryParams: AutomlProjectsLocationsTestIamPermissionsQueryParams;
    request?: shared.TestIamPermissionsRequest;
    security: AutomlProjectsLocationsTestIamPermissionsSecurity;
}
export declare class AutomlProjectsLocationsTestIamPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    testIamPermissionsResponse?: shared.TestIamPermissionsResponse;
}
