import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AccesscontextmanagerAccessPoliciesAccessLevelsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare enum AccesscontextmanagerAccessPoliciesAccessLevelsListAccessLevelFormatEnum {
    LevelFormatUnspecified = "LEVEL_FORMAT_UNSPECIFIED",
    AsDefined = "AS_DEFINED",
    Cel = "CEL"
}
export declare class AccesscontextmanagerAccessPoliciesAccessLevelsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessLevelFormat?: AccesscontextmanagerAccessPoliciesAccessLevelsListAccessLevelFormatEnum;
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
export declare class AccesscontextmanagerAccessPoliciesAccessLevelsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AccesscontextmanagerAccessPoliciesAccessLevelsListRequest extends SpeakeasyBase {
    pathParams: AccesscontextmanagerAccessPoliciesAccessLevelsListPathParams;
    queryParams: AccesscontextmanagerAccessPoliciesAccessLevelsListQueryParams;
    security: AccesscontextmanagerAccessPoliciesAccessLevelsListSecurity;
}
export declare class AccesscontextmanagerAccessPoliciesAccessLevelsListResponse extends SpeakeasyBase {
    contentType: string;
    listAccessLevelsResponse?: shared.ListAccessLevelsResponse;
    statusCode: number;
}
