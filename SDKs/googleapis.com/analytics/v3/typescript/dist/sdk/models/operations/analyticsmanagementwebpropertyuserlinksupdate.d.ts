import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementWebpropertyUserLinksUpdatePathParams extends SpeakeasyBase {
    accountId: string;
    linkId: string;
    webPropertyId: string;
}
export declare class AnalyticsManagementWebpropertyUserLinksUpdateQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AnalyticsManagementWebpropertyUserLinksUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementWebpropertyUserLinksUpdateRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementWebpropertyUserLinksUpdatePathParams;
    queryParams: AnalyticsManagementWebpropertyUserLinksUpdateQueryParams;
    request?: shared.EntityUserLinkInput;
    security: AnalyticsManagementWebpropertyUserLinksUpdateSecurity;
}
export declare class AnalyticsManagementWebpropertyUserLinksUpdateResponse extends SpeakeasyBase {
    contentType: string;
    entityUserLink?: shared.EntityUserLink;
    statusCode: number;
}
