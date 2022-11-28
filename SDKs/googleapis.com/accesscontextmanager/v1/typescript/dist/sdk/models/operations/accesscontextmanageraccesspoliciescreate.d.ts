import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AccesscontextmanagerAccessPoliciesCreateQueryParams extends SpeakeasyBase {
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
export declare class AccesscontextmanagerAccessPoliciesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AccesscontextmanagerAccessPoliciesCreateRequest extends SpeakeasyBase {
    queryParams: AccesscontextmanagerAccessPoliciesCreateQueryParams;
    request?: shared.AccessPolicy;
    security: AccesscontextmanagerAccessPoliciesCreateSecurity;
}
export declare class AccesscontextmanagerAccessPoliciesCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
