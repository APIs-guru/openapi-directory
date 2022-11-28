import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BeyondcorpProjectsLocationsClientGatewaysSetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class BeyondcorpProjectsLocationsClientGatewaysSetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class BeyondcorpProjectsLocationsClientGatewaysSetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BeyondcorpProjectsLocationsClientGatewaysSetIamPolicyRequest extends SpeakeasyBase {
    pathParams: BeyondcorpProjectsLocationsClientGatewaysSetIamPolicyPathParams;
    queryParams: BeyondcorpProjectsLocationsClientGatewaysSetIamPolicyQueryParams;
    request?: shared.GoogleIamV1SetIamPolicyRequest;
    security: BeyondcorpProjectsLocationsClientGatewaysSetIamPolicySecurity;
}
export declare class BeyondcorpProjectsLocationsClientGatewaysSetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    googleIamV1Policy?: shared.GoogleIamV1Policy;
    statusCode: number;
}
