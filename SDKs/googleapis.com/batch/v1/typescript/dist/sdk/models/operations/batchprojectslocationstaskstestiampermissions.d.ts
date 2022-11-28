import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BatchProjectsLocationsTasksTestIamPermissionsPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class BatchProjectsLocationsTasksTestIamPermissionsQueryParams extends SpeakeasyBase {
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
export declare class BatchProjectsLocationsTasksTestIamPermissionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BatchProjectsLocationsTasksTestIamPermissionsRequest extends SpeakeasyBase {
    pathParams: BatchProjectsLocationsTasksTestIamPermissionsPathParams;
    queryParams: BatchProjectsLocationsTasksTestIamPermissionsQueryParams;
    request?: shared.TestIamPermissionsRequest;
    security: BatchProjectsLocationsTasksTestIamPermissionsSecurity;
}
export declare class BatchProjectsLocationsTasksTestIamPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    testIamPermissionsResponse?: shared.TestIamPermissionsResponse;
}
