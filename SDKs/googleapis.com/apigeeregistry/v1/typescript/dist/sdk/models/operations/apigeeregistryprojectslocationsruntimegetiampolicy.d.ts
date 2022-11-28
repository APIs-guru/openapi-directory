import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeregistryProjectsLocationsRuntimeGetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class ApigeeregistryProjectsLocationsRuntimeGetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class ApigeeregistryProjectsLocationsRuntimeGetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeregistryProjectsLocationsRuntimeGetIamPolicyRequest extends SpeakeasyBase {
    pathParams: ApigeeregistryProjectsLocationsRuntimeGetIamPolicyPathParams;
    queryParams: ApigeeregistryProjectsLocationsRuntimeGetIamPolicyQueryParams;
    security: ApigeeregistryProjectsLocationsRuntimeGetIamPolicySecurity;
}
export declare class ApigeeregistryProjectsLocationsRuntimeGetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
