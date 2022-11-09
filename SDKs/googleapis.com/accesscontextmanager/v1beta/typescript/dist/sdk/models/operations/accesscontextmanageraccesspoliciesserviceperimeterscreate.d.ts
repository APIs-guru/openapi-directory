import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AccesscontextmanagerAccessPoliciesServicePerimetersCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AccesscontextmanagerAccessPoliciesServicePerimetersCreateQueryParams extends SpeakeasyBase {
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
export declare class AccesscontextmanagerAccessPoliciesServicePerimetersCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AccesscontextmanagerAccessPoliciesServicePerimetersCreateRequest extends SpeakeasyBase {
    pathParams: AccesscontextmanagerAccessPoliciesServicePerimetersCreatePathParams;
    queryParams: AccesscontextmanagerAccessPoliciesServicePerimetersCreateQueryParams;
    request?: shared.ServicePerimeter;
    security: AccesscontextmanagerAccessPoliciesServicePerimetersCreateSecurity;
}
export declare class AccesscontextmanagerAccessPoliciesServicePerimetersCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
