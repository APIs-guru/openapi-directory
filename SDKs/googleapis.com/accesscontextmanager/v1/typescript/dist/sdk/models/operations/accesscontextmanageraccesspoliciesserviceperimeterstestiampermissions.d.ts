import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AccesscontextmanagerAccessPoliciesServicePerimetersTestIamPermissionsPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class AccesscontextmanagerAccessPoliciesServicePerimetersTestIamPermissionsQueryParams extends SpeakeasyBase {
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
export declare class AccesscontextmanagerAccessPoliciesServicePerimetersTestIamPermissionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AccesscontextmanagerAccessPoliciesServicePerimetersTestIamPermissionsRequest extends SpeakeasyBase {
    pathParams: AccesscontextmanagerAccessPoliciesServicePerimetersTestIamPermissionsPathParams;
    queryParams: AccesscontextmanagerAccessPoliciesServicePerimetersTestIamPermissionsQueryParams;
    request?: shared.TestIamPermissionsRequest;
    security: AccesscontextmanagerAccessPoliciesServicePerimetersTestIamPermissionsSecurity;
}
export declare class AccesscontextmanagerAccessPoliciesServicePerimetersTestIamPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    testIamPermissionsResponse?: shared.TestIamPermissionsResponse;
}
