import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsQueryParams extends SpeakeasyBase {
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
export declare class BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsRequest extends SpeakeasyBase {
    pathParams: BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsPathParams;
    queryParams: BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsQueryParams;
    request?: shared.GoogleIamV1TestIamPermissionsRequest;
    security: BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsSecurity;
}
export declare class BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    googleIamV1TestIamPermissionsResponse?: shared.GoogleIamV1TestIamPermissionsResponse;
    statusCode: number;
}
