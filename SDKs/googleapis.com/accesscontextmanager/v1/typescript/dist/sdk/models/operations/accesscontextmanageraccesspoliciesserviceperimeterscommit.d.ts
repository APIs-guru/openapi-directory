import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AccesscontextmanagerAccessPoliciesServicePerimetersCommitPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AccesscontextmanagerAccessPoliciesServicePerimetersCommitQueryParams extends SpeakeasyBase {
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
export declare class AccesscontextmanagerAccessPoliciesServicePerimetersCommitSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AccesscontextmanagerAccessPoliciesServicePerimetersCommitRequest extends SpeakeasyBase {
    pathParams: AccesscontextmanagerAccessPoliciesServicePerimetersCommitPathParams;
    queryParams: AccesscontextmanagerAccessPoliciesServicePerimetersCommitQueryParams;
    request?: shared.CommitServicePerimetersRequest;
    security: AccesscontextmanagerAccessPoliciesServicePerimetersCommitSecurity;
}
export declare class AccesscontextmanagerAccessPoliciesServicePerimetersCommitResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
