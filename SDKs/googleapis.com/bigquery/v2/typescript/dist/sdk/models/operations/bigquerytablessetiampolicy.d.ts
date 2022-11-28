import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigqueryTablesSetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class BigqueryTablesSetIamPolicyQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class BigqueryTablesSetIamPolicySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryTablesSetIamPolicySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryTablesSetIamPolicySecurity extends SpeakeasyBase {
    option1?: BigqueryTablesSetIamPolicySecurityOption1;
    option2?: BigqueryTablesSetIamPolicySecurityOption2;
}
export declare class BigqueryTablesSetIamPolicyRequest extends SpeakeasyBase {
    pathParams: BigqueryTablesSetIamPolicyPathParams;
    queryParams: BigqueryTablesSetIamPolicyQueryParams;
    request?: shared.SetIamPolicyRequest;
    security: BigqueryTablesSetIamPolicySecurity;
}
export declare class BigqueryTablesSetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
