import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllQueryParams extends SpeakeasyBase {
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
export declare class AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllRequest extends SpeakeasyBase {
    pathParams: AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllPathParams;
    queryParams: AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllQueryParams;
    request?: shared.ReplaceAccessLevelsRequest;
    security: AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllSecurity;
}
export declare class AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
