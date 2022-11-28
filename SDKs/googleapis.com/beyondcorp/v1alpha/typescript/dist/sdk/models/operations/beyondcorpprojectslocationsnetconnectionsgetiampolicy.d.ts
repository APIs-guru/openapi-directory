import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BeyondcorpProjectsLocationsNetConnectionsGetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class BeyondcorpProjectsLocationsNetConnectionsGetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class BeyondcorpProjectsLocationsNetConnectionsGetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BeyondcorpProjectsLocationsNetConnectionsGetIamPolicyRequest extends SpeakeasyBase {
    pathParams: BeyondcorpProjectsLocationsNetConnectionsGetIamPolicyPathParams;
    queryParams: BeyondcorpProjectsLocationsNetConnectionsGetIamPolicyQueryParams;
    security: BeyondcorpProjectsLocationsNetConnectionsGetIamPolicySecurity;
}
export declare class BeyondcorpProjectsLocationsNetConnectionsGetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    googleIamV1Policy?: shared.GoogleIamV1Policy;
    statusCode: number;
}
