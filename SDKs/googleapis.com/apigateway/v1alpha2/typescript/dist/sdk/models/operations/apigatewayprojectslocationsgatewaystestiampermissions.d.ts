import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ApigatewayProjectsLocationsGatewaysTestIamPermissionsPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class ApigatewayProjectsLocationsGatewaysTestIamPermissionsQueryParams extends SpeakeasyBase {
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
export declare class ApigatewayProjectsLocationsGatewaysTestIamPermissionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigatewayProjectsLocationsGatewaysTestIamPermissionsRequest extends SpeakeasyBase {
    pathParams: ApigatewayProjectsLocationsGatewaysTestIamPermissionsPathParams;
    queryParams: ApigatewayProjectsLocationsGatewaysTestIamPermissionsQueryParams;
    request?: shared.ApigatewayTestIamPermissionsRequest;
    security: ApigatewayProjectsLocationsGatewaysTestIamPermissionsSecurity;
}
export declare class ApigatewayProjectsLocationsGatewaysTestIamPermissionsResponse extends SpeakeasyBase {
    apigatewayTestIamPermissionsResponse?: shared.ApigatewayTestIamPermissionsResponse;
    contentType: string;
    statusCode: number;
}
