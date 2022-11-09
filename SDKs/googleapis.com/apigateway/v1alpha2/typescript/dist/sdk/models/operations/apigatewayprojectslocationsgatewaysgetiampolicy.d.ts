import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ApigatewayProjectsLocationsGatewaysGetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class ApigatewayProjectsLocationsGatewaysGetIamPolicyQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    optionsRequestedPolicyVersion?: number;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ApigatewayProjectsLocationsGatewaysGetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigatewayProjectsLocationsGatewaysGetIamPolicyRequest extends SpeakeasyBase {
    pathParams: ApigatewayProjectsLocationsGatewaysGetIamPolicyPathParams;
    queryParams: ApigatewayProjectsLocationsGatewaysGetIamPolicyQueryParams;
    security: ApigatewayProjectsLocationsGatewaysGetIamPolicySecurity;
}
export declare class ApigatewayProjectsLocationsGatewaysGetIamPolicyResponse extends SpeakeasyBase {
    apigatewayPolicy?: shared.ApigatewayPolicy;
    contentType: string;
    statusCode: number;
}
