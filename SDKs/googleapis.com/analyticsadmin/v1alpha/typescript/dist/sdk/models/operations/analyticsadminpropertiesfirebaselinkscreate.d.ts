import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsadminPropertiesFirebaseLinksCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AnalyticsadminPropertiesFirebaseLinksCreateQueryParams extends SpeakeasyBase {
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
export declare class AnalyticsadminPropertiesFirebaseLinksCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsadminPropertiesFirebaseLinksCreateRequest extends SpeakeasyBase {
    pathParams: AnalyticsadminPropertiesFirebaseLinksCreatePathParams;
    queryParams: AnalyticsadminPropertiesFirebaseLinksCreateQueryParams;
    request?: shared.GoogleAnalyticsAdminV1alphaFirebaseLinkInput;
    security: AnalyticsadminPropertiesFirebaseLinksCreateSecurity;
}
export declare class AnalyticsadminPropertiesFirebaseLinksCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleAnalyticsAdminV1alphaFirebaseLink?: shared.GoogleAnalyticsAdminV1alphaFirebaseLink;
    statusCode: number;
}
