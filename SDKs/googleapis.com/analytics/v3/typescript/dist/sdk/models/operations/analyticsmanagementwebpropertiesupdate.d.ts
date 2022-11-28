import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementWebpropertiesUpdatePathParams extends SpeakeasyBase {
    accountId: string;
    webPropertyId: string;
}
export declare class AnalyticsManagementWebpropertiesUpdateQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AnalyticsManagementWebpropertiesUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementWebpropertiesUpdateRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementWebpropertiesUpdatePathParams;
    queryParams: AnalyticsManagementWebpropertiesUpdateQueryParams;
    request?: shared.WebpropertyInput;
    security: AnalyticsManagementWebpropertiesUpdateSecurity;
}
export declare class AnalyticsManagementWebpropertiesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    webproperty?: shared.Webproperty;
}
