import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ApigeeregistryProjectsLocationsRuntimeSetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class ApigeeregistryProjectsLocationsRuntimeSetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class ApigeeregistryProjectsLocationsRuntimeSetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeregistryProjectsLocationsRuntimeSetIamPolicyRequest extends SpeakeasyBase {
    pathParams: ApigeeregistryProjectsLocationsRuntimeSetIamPolicyPathParams;
    queryParams: ApigeeregistryProjectsLocationsRuntimeSetIamPolicyQueryParams;
    request?: shared.SetIamPolicyRequest;
    security: ApigeeregistryProjectsLocationsRuntimeSetIamPolicySecurity;
}
export declare class ApigeeregistryProjectsLocationsRuntimeSetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
