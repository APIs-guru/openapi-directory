import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsEnvironmentsGetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class ApigeeOrganizationsEnvironmentsGetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class ApigeeOrganizationsEnvironmentsGetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsEnvironmentsGetIamPolicyRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsEnvironmentsGetIamPolicyPathParams;
    queryParams: ApigeeOrganizationsEnvironmentsGetIamPolicyQueryParams;
    security: ApigeeOrganizationsEnvironmentsGetIamPolicySecurity;
}
export declare class ApigeeOrganizationsEnvironmentsGetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    googleIamV1Policy?: shared.GoogleIamV1Policy;
    statusCode: number;
}
