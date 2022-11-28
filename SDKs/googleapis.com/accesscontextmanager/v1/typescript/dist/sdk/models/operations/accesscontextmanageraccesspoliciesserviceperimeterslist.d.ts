import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AccesscontextmanagerAccessPoliciesServicePerimetersListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AccesscontextmanagerAccessPoliciesServicePerimetersListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AccesscontextmanagerAccessPoliciesServicePerimetersListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AccesscontextmanagerAccessPoliciesServicePerimetersListRequest extends SpeakeasyBase {
    pathParams: AccesscontextmanagerAccessPoliciesServicePerimetersListPathParams;
    queryParams: AccesscontextmanagerAccessPoliciesServicePerimetersListQueryParams;
    security: AccesscontextmanagerAccessPoliciesServicePerimetersListSecurity;
}
export declare class AccesscontextmanagerAccessPoliciesServicePerimetersListResponse extends SpeakeasyBase {
    contentType: string;
    listServicePerimetersResponse?: shared.ListServicePerimetersResponse;
    statusCode: number;
}
