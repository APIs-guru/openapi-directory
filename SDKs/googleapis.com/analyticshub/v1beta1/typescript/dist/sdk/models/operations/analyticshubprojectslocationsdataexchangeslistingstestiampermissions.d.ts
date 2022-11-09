import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AnalyticshubProjectsLocationsDataExchangesListingsTestIamPermissionsPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class AnalyticshubProjectsLocationsDataExchangesListingsTestIamPermissionsQueryParams extends SpeakeasyBase {
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
export declare class AnalyticshubProjectsLocationsDataExchangesListingsTestIamPermissionsSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticshubProjectsLocationsDataExchangesListingsTestIamPermissionsSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticshubProjectsLocationsDataExchangesListingsTestIamPermissionsSecurity extends SpeakeasyBase {
    option1?: AnalyticshubProjectsLocationsDataExchangesListingsTestIamPermissionsSecurityOption1;
    option2?: AnalyticshubProjectsLocationsDataExchangesListingsTestIamPermissionsSecurityOption2;
}
export declare class AnalyticshubProjectsLocationsDataExchangesListingsTestIamPermissionsRequest extends SpeakeasyBase {
    pathParams: AnalyticshubProjectsLocationsDataExchangesListingsTestIamPermissionsPathParams;
    queryParams: AnalyticshubProjectsLocationsDataExchangesListingsTestIamPermissionsQueryParams;
    request?: shared.TestIamPermissionsRequest;
    security: AnalyticshubProjectsLocationsDataExchangesListingsTestIamPermissionsSecurity;
}
export declare class AnalyticshubProjectsLocationsDataExchangesListingsTestIamPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    testIamPermissionsResponse?: shared.TestIamPermissionsResponse;
}
