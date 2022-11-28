import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigqueryProjectsGetServiceAccountPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class BigqueryProjectsGetServiceAccountQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class BigqueryProjectsGetServiceAccountSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryProjectsGetServiceAccountSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryProjectsGetServiceAccountSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryProjectsGetServiceAccountSecurity extends SpeakeasyBase {
    option1?: BigqueryProjectsGetServiceAccountSecurityOption1;
    option2?: BigqueryProjectsGetServiceAccountSecurityOption2;
    option3?: BigqueryProjectsGetServiceAccountSecurityOption3;
}
export declare class BigqueryProjectsGetServiceAccountRequest extends SpeakeasyBase {
    pathParams: BigqueryProjectsGetServiceAccountPathParams;
    queryParams: BigqueryProjectsGetServiceAccountQueryParams;
    security: BigqueryProjectsGetServiceAccountSecurity;
}
export declare class BigqueryProjectsGetServiceAccountResponse extends SpeakeasyBase {
    contentType: string;
    getServiceAccountResponse?: shared.GetServiceAccountResponse;
    statusCode: number;
}
