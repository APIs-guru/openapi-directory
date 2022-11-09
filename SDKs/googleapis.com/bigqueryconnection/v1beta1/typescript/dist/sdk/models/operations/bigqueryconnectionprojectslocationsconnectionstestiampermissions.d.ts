import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class BigqueryconnectionProjectsLocationsConnectionsTestIamPermissionsPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class BigqueryconnectionProjectsLocationsConnectionsTestIamPermissionsQueryParams extends SpeakeasyBase {
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
export declare class BigqueryconnectionProjectsLocationsConnectionsTestIamPermissionsSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryconnectionProjectsLocationsConnectionsTestIamPermissionsSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryconnectionProjectsLocationsConnectionsTestIamPermissionsSecurity extends SpeakeasyBase {
    option1?: BigqueryconnectionProjectsLocationsConnectionsTestIamPermissionsSecurityOption1;
    option2?: BigqueryconnectionProjectsLocationsConnectionsTestIamPermissionsSecurityOption2;
}
export declare class BigqueryconnectionProjectsLocationsConnectionsTestIamPermissionsRequest extends SpeakeasyBase {
    pathParams: BigqueryconnectionProjectsLocationsConnectionsTestIamPermissionsPathParams;
    queryParams: BigqueryconnectionProjectsLocationsConnectionsTestIamPermissionsQueryParams;
    request?: shared.TestIamPermissionsRequest;
    security: BigqueryconnectionProjectsLocationsConnectionsTestIamPermissionsSecurity;
}
export declare class BigqueryconnectionProjectsLocationsConnectionsTestIamPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    testIamPermissionsResponse?: shared.TestIamPermissionsResponse;
}
