import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsadminPropertiesConversionEventsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AnalyticsadminPropertiesConversionEventsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AnalyticsadminPropertiesConversionEventsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsadminPropertiesConversionEventsCreateRequest extends SpeakeasyBase {
    pathParams: AnalyticsadminPropertiesConversionEventsCreatePathParams;
    queryParams: AnalyticsadminPropertiesConversionEventsCreateQueryParams;
    request?: shared.GoogleAnalyticsAdminV1alphaConversionEventInput;
    security: AnalyticsadminPropertiesConversionEventsCreateSecurity;
}
export declare class AnalyticsadminPropertiesConversionEventsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleAnalyticsAdminV1alphaConversionEvent?: shared.GoogleAnalyticsAdminV1alphaConversionEvent;
    statusCode: number;
}
