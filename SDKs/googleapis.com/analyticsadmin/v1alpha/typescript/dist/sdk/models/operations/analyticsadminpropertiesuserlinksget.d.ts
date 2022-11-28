import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsadminPropertiesUserLinksGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class AnalyticsadminPropertiesUserLinksGetQueryParams extends SpeakeasyBase {
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
export declare class AnalyticsadminPropertiesUserLinksGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsadminPropertiesUserLinksGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsadminPropertiesUserLinksGetSecurity extends SpeakeasyBase {
    option1?: AnalyticsadminPropertiesUserLinksGetSecurityOption1;
    option2?: AnalyticsadminPropertiesUserLinksGetSecurityOption2;
}
export declare class AnalyticsadminPropertiesUserLinksGetRequest extends SpeakeasyBase {
    pathParams: AnalyticsadminPropertiesUserLinksGetPathParams;
    queryParams: AnalyticsadminPropertiesUserLinksGetQueryParams;
    security: AnalyticsadminPropertiesUserLinksGetSecurity;
}
export declare class AnalyticsadminPropertiesUserLinksGetResponse extends SpeakeasyBase {
    contentType: string;
    googleAnalyticsAdminV1alphaUserLink?: shared.GoogleAnalyticsAdminV1alphaUserLink;
    statusCode: number;
}
