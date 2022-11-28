import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsadminPropertiesCustomDimensionsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AnalyticsadminPropertiesCustomDimensionsListQueryParams extends SpeakeasyBase {
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
export declare class AnalyticsadminPropertiesCustomDimensionsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsadminPropertiesCustomDimensionsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsadminPropertiesCustomDimensionsListSecurity extends SpeakeasyBase {
    option1?: AnalyticsadminPropertiesCustomDimensionsListSecurityOption1;
    option2?: AnalyticsadminPropertiesCustomDimensionsListSecurityOption2;
}
export declare class AnalyticsadminPropertiesCustomDimensionsListRequest extends SpeakeasyBase {
    pathParams: AnalyticsadminPropertiesCustomDimensionsListPathParams;
    queryParams: AnalyticsadminPropertiesCustomDimensionsListQueryParams;
    security: AnalyticsadminPropertiesCustomDimensionsListSecurity;
}
export declare class AnalyticsadminPropertiesCustomDimensionsListResponse extends SpeakeasyBase {
    contentType: string;
    googleAnalyticsAdminV1alphaListCustomDimensionsResponse?: shared.GoogleAnalyticsAdminV1alphaListCustomDimensionsResponse;
    statusCode: number;
}
