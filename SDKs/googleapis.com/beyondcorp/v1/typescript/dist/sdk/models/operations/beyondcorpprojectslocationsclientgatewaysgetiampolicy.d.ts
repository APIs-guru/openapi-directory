import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BeyondcorpProjectsLocationsClientGatewaysGetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class BeyondcorpProjectsLocationsClientGatewaysGetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class BeyondcorpProjectsLocationsClientGatewaysGetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BeyondcorpProjectsLocationsClientGatewaysGetIamPolicyRequest extends SpeakeasyBase {
    pathParams: BeyondcorpProjectsLocationsClientGatewaysGetIamPolicyPathParams;
    queryParams: BeyondcorpProjectsLocationsClientGatewaysGetIamPolicyQueryParams;
    security: BeyondcorpProjectsLocationsClientGatewaysGetIamPolicySecurity;
}
export declare class BeyondcorpProjectsLocationsClientGatewaysGetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    googleIamV1Policy?: shared.GoogleIamV1Policy;
    statusCode: number;
}
