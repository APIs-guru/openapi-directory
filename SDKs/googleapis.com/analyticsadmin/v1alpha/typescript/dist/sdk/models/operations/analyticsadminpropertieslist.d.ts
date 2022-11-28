import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsadminPropertiesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    showDeleted?: boolean;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AnalyticsadminPropertiesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsadminPropertiesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsadminPropertiesListSecurity extends SpeakeasyBase {
    option1?: AnalyticsadminPropertiesListSecurityOption1;
    option2?: AnalyticsadminPropertiesListSecurityOption2;
}
export declare class AnalyticsadminPropertiesListRequest extends SpeakeasyBase {
    queryParams: AnalyticsadminPropertiesListQueryParams;
    security: AnalyticsadminPropertiesListSecurity;
}
export declare class AnalyticsadminPropertiesListResponse extends SpeakeasyBase {
    contentType: string;
    googleAnalyticsAdminV1alphaListPropertiesResponse?: shared.GoogleAnalyticsAdminV1alphaListPropertiesResponse;
    statusCode: number;
}
