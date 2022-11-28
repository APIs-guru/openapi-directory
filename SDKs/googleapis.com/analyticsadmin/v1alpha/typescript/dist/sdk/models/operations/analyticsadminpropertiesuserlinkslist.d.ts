import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsadminPropertiesUserLinksListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AnalyticsadminPropertiesUserLinksListQueryParams extends SpeakeasyBase {
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
export declare class AnalyticsadminPropertiesUserLinksListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsadminPropertiesUserLinksListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsadminPropertiesUserLinksListSecurity extends SpeakeasyBase {
    option1?: AnalyticsadminPropertiesUserLinksListSecurityOption1;
    option2?: AnalyticsadminPropertiesUserLinksListSecurityOption2;
}
export declare class AnalyticsadminPropertiesUserLinksListRequest extends SpeakeasyBase {
    pathParams: AnalyticsadminPropertiesUserLinksListPathParams;
    queryParams: AnalyticsadminPropertiesUserLinksListQueryParams;
    security: AnalyticsadminPropertiesUserLinksListSecurity;
}
export declare class AnalyticsadminPropertiesUserLinksListResponse extends SpeakeasyBase {
    contentType: string;
    googleAnalyticsAdminV1alphaListUserLinksResponse?: shared.GoogleAnalyticsAdminV1alphaListUserLinksResponse;
    statusCode: number;
}
