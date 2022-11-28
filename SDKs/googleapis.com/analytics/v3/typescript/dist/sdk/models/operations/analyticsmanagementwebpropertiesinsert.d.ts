import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementWebpropertiesInsertPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class AnalyticsManagementWebpropertiesInsertQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AnalyticsManagementWebpropertiesInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementWebpropertiesInsertRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementWebpropertiesInsertPathParams;
    queryParams: AnalyticsManagementWebpropertiesInsertQueryParams;
    request?: shared.WebpropertyInput;
    security: AnalyticsManagementWebpropertiesInsertSecurity;
}
export declare class AnalyticsManagementWebpropertiesInsertResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    webproperty?: shared.Webproperty;
}
