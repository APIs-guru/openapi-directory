import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigqueryTablesGetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class BigqueryTablesGetIamPolicyQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class BigqueryTablesGetIamPolicySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryTablesGetIamPolicySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryTablesGetIamPolicySecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryTablesGetIamPolicySecurity extends SpeakeasyBase {
    option1?: BigqueryTablesGetIamPolicySecurityOption1;
    option2?: BigqueryTablesGetIamPolicySecurityOption2;
    option3?: BigqueryTablesGetIamPolicySecurityOption3;
}
export declare class BigqueryTablesGetIamPolicyRequest extends SpeakeasyBase {
    pathParams: BigqueryTablesGetIamPolicyPathParams;
    queryParams: BigqueryTablesGetIamPolicyQueryParams;
    request?: shared.GetIamPolicyRequest;
    security: BigqueryTablesGetIamPolicySecurity;
}
export declare class BigqueryTablesGetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
