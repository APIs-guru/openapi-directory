import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementWebpropertiesPatchPathParams extends SpeakeasyBase {
    accountId: string;
    webPropertyId: string;
}
export declare class AnalyticsManagementWebpropertiesPatchQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AnalyticsManagementWebpropertiesPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementWebpropertiesPatchRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementWebpropertiesPatchPathParams;
    queryParams: AnalyticsManagementWebpropertiesPatchQueryParams;
    request?: shared.WebpropertyInput;
    security: AnalyticsManagementWebpropertiesPatchSecurity;
}
export declare class AnalyticsManagementWebpropertiesPatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    webproperty?: shared.Webproperty;
}
