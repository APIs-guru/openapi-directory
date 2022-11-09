import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AccesscontextmanagerAccessPoliciesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    parent?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AccesscontextmanagerAccessPoliciesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AccesscontextmanagerAccessPoliciesListRequest extends SpeakeasyBase {
    queryParams: AccesscontextmanagerAccessPoliciesListQueryParams;
    security: AccesscontextmanagerAccessPoliciesListSecurity;
}
export declare class AccesscontextmanagerAccessPoliciesListResponse extends SpeakeasyBase {
    contentType: string;
    listAccessPoliciesResponse?: shared.ListAccessPoliciesResponse;
    statusCode: number;
}
