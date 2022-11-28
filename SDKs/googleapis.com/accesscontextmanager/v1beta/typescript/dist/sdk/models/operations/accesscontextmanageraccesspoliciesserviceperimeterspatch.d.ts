import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AccesscontextmanagerAccessPoliciesServicePerimetersPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class AccesscontextmanagerAccessPoliciesServicePerimetersPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AccesscontextmanagerAccessPoliciesServicePerimetersPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AccesscontextmanagerAccessPoliciesServicePerimetersPatchRequest extends SpeakeasyBase {
    pathParams: AccesscontextmanagerAccessPoliciesServicePerimetersPatchPathParams;
    queryParams: AccesscontextmanagerAccessPoliciesServicePerimetersPatchQueryParams;
    request?: shared.ServicePerimeter;
    security: AccesscontextmanagerAccessPoliciesServicePerimetersPatchSecurity;
}
export declare class AccesscontextmanagerAccessPoliciesServicePerimetersPatchResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
