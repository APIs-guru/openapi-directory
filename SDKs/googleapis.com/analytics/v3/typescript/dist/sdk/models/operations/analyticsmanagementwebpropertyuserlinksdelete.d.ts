import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementWebpropertyUserLinksDeletePathParams extends SpeakeasyBase {
    accountId: string;
    linkId: string;
    webPropertyId: string;
}
export declare class AnalyticsManagementWebpropertyUserLinksDeleteQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AnalyticsManagementWebpropertyUserLinksDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementWebpropertyUserLinksDeleteRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementWebpropertyUserLinksDeletePathParams;
    queryParams: AnalyticsManagementWebpropertyUserLinksDeleteQueryParams;
    security: AnalyticsManagementWebpropertyUserLinksDeleteSecurity;
}
export declare class AnalyticsManagementWebpropertyUserLinksDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
