import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsadminPropertiesUserLinksPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class AnalyticsadminPropertiesUserLinksPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AnalyticsadminPropertiesUserLinksPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsadminPropertiesUserLinksPatchRequest extends SpeakeasyBase {
    pathParams: AnalyticsadminPropertiesUserLinksPatchPathParams;
    queryParams: AnalyticsadminPropertiesUserLinksPatchQueryParams;
    request?: shared.GoogleAnalyticsAdminV1alphaUserLinkInput;
    security: AnalyticsadminPropertiesUserLinksPatchSecurity;
}
export declare class AnalyticsadminPropertiesUserLinksPatchResponse extends SpeakeasyBase {
    contentType: string;
    googleAnalyticsAdminV1alphaUserLink?: shared.GoogleAnalyticsAdminV1alphaUserLink;
    statusCode: number;
}
