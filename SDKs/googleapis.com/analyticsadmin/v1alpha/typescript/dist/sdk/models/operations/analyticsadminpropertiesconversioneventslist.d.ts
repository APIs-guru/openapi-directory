import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsadminPropertiesConversionEventsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AnalyticsadminPropertiesConversionEventsListQueryParams extends SpeakeasyBase {
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
export declare class AnalyticsadminPropertiesConversionEventsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsadminPropertiesConversionEventsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsadminPropertiesConversionEventsListSecurity extends SpeakeasyBase {
    option1?: AnalyticsadminPropertiesConversionEventsListSecurityOption1;
    option2?: AnalyticsadminPropertiesConversionEventsListSecurityOption2;
}
export declare class AnalyticsadminPropertiesConversionEventsListRequest extends SpeakeasyBase {
    pathParams: AnalyticsadminPropertiesConversionEventsListPathParams;
    queryParams: AnalyticsadminPropertiesConversionEventsListQueryParams;
    security: AnalyticsadminPropertiesConversionEventsListSecurity;
}
export declare class AnalyticsadminPropertiesConversionEventsListResponse extends SpeakeasyBase {
    contentType: string;
    googleAnalyticsAdminV1alphaListConversionEventsResponse?: shared.GoogleAnalyticsAdminV1alphaListConversionEventsResponse;
    statusCode: number;
}
