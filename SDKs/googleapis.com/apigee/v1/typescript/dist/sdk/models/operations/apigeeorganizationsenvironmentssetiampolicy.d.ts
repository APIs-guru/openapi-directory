import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsEnvironmentsSetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class ApigeeOrganizationsEnvironmentsSetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class ApigeeOrganizationsEnvironmentsSetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsEnvironmentsSetIamPolicyRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsEnvironmentsSetIamPolicyPathParams;
    queryParams: ApigeeOrganizationsEnvironmentsSetIamPolicyQueryParams;
    request?: shared.GoogleIamV1SetIamPolicyRequest;
    security: ApigeeOrganizationsEnvironmentsSetIamPolicySecurity;
}
export declare class ApigeeOrganizationsEnvironmentsSetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    googleIamV1Policy?: shared.GoogleIamV1Policy;
    statusCode: number;
}
