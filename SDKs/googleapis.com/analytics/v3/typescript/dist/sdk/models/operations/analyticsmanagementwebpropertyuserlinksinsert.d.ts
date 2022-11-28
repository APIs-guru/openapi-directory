import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementWebpropertyUserLinksInsertPathParams extends SpeakeasyBase {
    accountId: string;
    webPropertyId: string;
}
export declare class AnalyticsManagementWebpropertyUserLinksInsertQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AnalyticsManagementWebpropertyUserLinksInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementWebpropertyUserLinksInsertRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementWebpropertyUserLinksInsertPathParams;
    queryParams: AnalyticsManagementWebpropertyUserLinksInsertQueryParams;
    request?: shared.EntityUserLinkInput;
    security: AnalyticsManagementWebpropertyUserLinksInsertSecurity;
}
export declare class AnalyticsManagementWebpropertyUserLinksInsertResponse extends SpeakeasyBase {
    contentType: string;
    entityUserLink?: shared.EntityUserLink;
    statusCode: number;
}
