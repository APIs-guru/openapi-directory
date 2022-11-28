import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllQueryParams extends SpeakeasyBase {
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
export declare class AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllRequest extends SpeakeasyBase {
    pathParams: AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllPathParams;
    queryParams: AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllQueryParams;
    request?: shared.ReplaceServicePerimetersRequest;
    security: AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllSecurity;
}
export declare class AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
