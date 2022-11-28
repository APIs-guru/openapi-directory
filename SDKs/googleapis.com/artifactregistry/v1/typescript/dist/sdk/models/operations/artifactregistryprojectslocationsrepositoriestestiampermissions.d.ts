import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsQueryParams extends SpeakeasyBase {
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
export declare class ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsSecurity extends SpeakeasyBase {
    option1?: ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsSecurityOption1;
    option2?: ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsSecurityOption2;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsRequest extends SpeakeasyBase {
    pathParams: ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsPathParams;
    queryParams: ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsQueryParams;
    request?: shared.TestIamPermissionsRequest;
    security: ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsSecurity;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    testIamPermissionsResponse?: shared.TestIamPermissionsResponse;
}
