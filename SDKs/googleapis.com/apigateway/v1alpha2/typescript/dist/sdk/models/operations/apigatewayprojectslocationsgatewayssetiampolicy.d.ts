import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigatewayProjectsLocationsGatewaysSetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class ApigatewayProjectsLocationsGatewaysSetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class ApigatewayProjectsLocationsGatewaysSetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigatewayProjectsLocationsGatewaysSetIamPolicyRequest extends SpeakeasyBase {
    pathParams: ApigatewayProjectsLocationsGatewaysSetIamPolicyPathParams;
    queryParams: ApigatewayProjectsLocationsGatewaysSetIamPolicyQueryParams;
    request?: shared.ApigatewaySetIamPolicyRequest;
    security: ApigatewayProjectsLocationsGatewaysSetIamPolicySecurity;
}
export declare class ApigatewayProjectsLocationsGatewaysSetIamPolicyResponse extends SpeakeasyBase {
    apigatewayPolicy?: shared.ApigatewayPolicy;
    contentType: string;
    statusCode: number;
}
