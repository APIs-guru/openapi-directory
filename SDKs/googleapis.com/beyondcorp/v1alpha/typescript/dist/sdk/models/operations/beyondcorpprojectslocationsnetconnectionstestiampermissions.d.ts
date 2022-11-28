import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BeyondcorpProjectsLocationsNetConnectionsTestIamPermissionsPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class BeyondcorpProjectsLocationsNetConnectionsTestIamPermissionsQueryParams extends SpeakeasyBase {
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
export declare class BeyondcorpProjectsLocationsNetConnectionsTestIamPermissionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BeyondcorpProjectsLocationsNetConnectionsTestIamPermissionsRequest extends SpeakeasyBase {
    pathParams: BeyondcorpProjectsLocationsNetConnectionsTestIamPermissionsPathParams;
    queryParams: BeyondcorpProjectsLocationsNetConnectionsTestIamPermissionsQueryParams;
    request?: shared.GoogleIamV1TestIamPermissionsRequest;
    security: BeyondcorpProjectsLocationsNetConnectionsTestIamPermissionsSecurity;
}
export declare class BeyondcorpProjectsLocationsNetConnectionsTestIamPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    googleIamV1TestIamPermissionsResponse?: shared.GoogleIamV1TestIamPermissionsResponse;
    statusCode: number;
}
