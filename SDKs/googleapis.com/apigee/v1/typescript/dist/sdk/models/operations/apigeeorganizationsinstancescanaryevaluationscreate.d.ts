import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsInstancesCanaryevaluationsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeOrganizationsInstancesCanaryevaluationsCreateQueryParams extends SpeakeasyBase {
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
export declare class ApigeeOrganizationsInstancesCanaryevaluationsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsInstancesCanaryevaluationsCreateRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsInstancesCanaryevaluationsCreatePathParams;
    queryParams: ApigeeOrganizationsInstancesCanaryevaluationsCreateQueryParams;
    request?: shared.GoogleCloudApigeeV1CanaryEvaluationInput;
    security: ApigeeOrganizationsInstancesCanaryevaluationsCreateSecurity;
}
export declare class ApigeeOrganizationsInstancesCanaryevaluationsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
