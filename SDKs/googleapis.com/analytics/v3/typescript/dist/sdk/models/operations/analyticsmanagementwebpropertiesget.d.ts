import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementWebpropertiesGetPathParams extends SpeakeasyBase {
    accountId: string;
    webPropertyId: string;
}
export declare class AnalyticsManagementWebpropertiesGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AnalyticsManagementWebpropertiesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementWebpropertiesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementWebpropertiesGetSecurity extends SpeakeasyBase {
    option1?: AnalyticsManagementWebpropertiesGetSecurityOption1;
    option2?: AnalyticsManagementWebpropertiesGetSecurityOption2;
}
export declare class AnalyticsManagementWebpropertiesGetRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementWebpropertiesGetPathParams;
    queryParams: AnalyticsManagementWebpropertiesGetQueryParams;
    security: AnalyticsManagementWebpropertiesGetSecurity;
}
export declare class AnalyticsManagementWebpropertiesGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    webproperty?: shared.Webproperty;
}
