import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ApigeeregistryProjectsLocationsRuntimeTestIamPermissionsPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class ApigeeregistryProjectsLocationsRuntimeTestIamPermissionsQueryParams extends SpeakeasyBase {
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
export declare class ApigeeregistryProjectsLocationsRuntimeTestIamPermissionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeregistryProjectsLocationsRuntimeTestIamPermissionsRequest extends SpeakeasyBase {
    pathParams: ApigeeregistryProjectsLocationsRuntimeTestIamPermissionsPathParams;
    queryParams: ApigeeregistryProjectsLocationsRuntimeTestIamPermissionsQueryParams;
    request?: shared.TestIamPermissionsRequest;
    security: ApigeeregistryProjectsLocationsRuntimeTestIamPermissionsSecurity;
}
export declare class ApigeeregistryProjectsLocationsRuntimeTestIamPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    testIamPermissionsResponse?: shared.TestIamPermissionsResponse;
}
