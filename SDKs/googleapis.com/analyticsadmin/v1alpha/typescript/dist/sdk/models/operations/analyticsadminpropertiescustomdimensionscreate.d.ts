import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsadminPropertiesCustomDimensionsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AnalyticsadminPropertiesCustomDimensionsCreateQueryParams extends SpeakeasyBase {
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
export declare class AnalyticsadminPropertiesCustomDimensionsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsadminPropertiesCustomDimensionsCreateRequest extends SpeakeasyBase {
    pathParams: AnalyticsadminPropertiesCustomDimensionsCreatePathParams;
    queryParams: AnalyticsadminPropertiesCustomDimensionsCreateQueryParams;
    request?: shared.GoogleAnalyticsAdminV1alphaCustomDimensionInput;
    security: AnalyticsadminPropertiesCustomDimensionsCreateSecurity;
}
export declare class AnalyticsadminPropertiesCustomDimensionsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleAnalyticsAdminV1alphaCustomDimension?: shared.GoogleAnalyticsAdminV1alphaCustomDimension;
    statusCode: number;
}
