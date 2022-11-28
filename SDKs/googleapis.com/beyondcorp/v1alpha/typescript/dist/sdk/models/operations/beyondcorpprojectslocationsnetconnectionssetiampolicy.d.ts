import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BeyondcorpProjectsLocationsNetConnectionsSetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class BeyondcorpProjectsLocationsNetConnectionsSetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class BeyondcorpProjectsLocationsNetConnectionsSetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BeyondcorpProjectsLocationsNetConnectionsSetIamPolicyRequest extends SpeakeasyBase {
    pathParams: BeyondcorpProjectsLocationsNetConnectionsSetIamPolicyPathParams;
    queryParams: BeyondcorpProjectsLocationsNetConnectionsSetIamPolicyQueryParams;
    request?: shared.GoogleIamV1SetIamPolicyRequest;
    security: BeyondcorpProjectsLocationsNetConnectionsSetIamPolicySecurity;
}
export declare class BeyondcorpProjectsLocationsNetConnectionsSetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    googleIamV1Policy?: shared.GoogleIamV1Policy;
    statusCode: number;
}
