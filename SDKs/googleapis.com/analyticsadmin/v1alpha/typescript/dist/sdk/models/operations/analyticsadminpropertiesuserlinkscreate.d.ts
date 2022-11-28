import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsadminPropertiesUserLinksCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AnalyticsadminPropertiesUserLinksCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    notifyNewUser?: boolean;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AnalyticsadminPropertiesUserLinksCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsadminPropertiesUserLinksCreateRequest extends SpeakeasyBase {
    pathParams: AnalyticsadminPropertiesUserLinksCreatePathParams;
    queryParams: AnalyticsadminPropertiesUserLinksCreateQueryParams;
    request?: shared.GoogleAnalyticsAdminV1alphaUserLinkInput;
    security: AnalyticsadminPropertiesUserLinksCreateSecurity;
}
export declare class AnalyticsadminPropertiesUserLinksCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleAnalyticsAdminV1alphaUserLink?: shared.GoogleAnalyticsAdminV1alphaUserLink;
    statusCode: number;
}
