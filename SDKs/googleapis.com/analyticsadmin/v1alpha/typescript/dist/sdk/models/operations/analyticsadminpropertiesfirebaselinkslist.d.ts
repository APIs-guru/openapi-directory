import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsadminPropertiesFirebaseLinksListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AnalyticsadminPropertiesFirebaseLinksListQueryParams extends SpeakeasyBase {
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
export declare class AnalyticsadminPropertiesFirebaseLinksListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsadminPropertiesFirebaseLinksListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsadminPropertiesFirebaseLinksListSecurity extends SpeakeasyBase {
    option1?: AnalyticsadminPropertiesFirebaseLinksListSecurityOption1;
    option2?: AnalyticsadminPropertiesFirebaseLinksListSecurityOption2;
}
export declare class AnalyticsadminPropertiesFirebaseLinksListRequest extends SpeakeasyBase {
    pathParams: AnalyticsadminPropertiesFirebaseLinksListPathParams;
    queryParams: AnalyticsadminPropertiesFirebaseLinksListQueryParams;
    security: AnalyticsadminPropertiesFirebaseLinksListSecurity;
}
export declare class AnalyticsadminPropertiesFirebaseLinksListResponse extends SpeakeasyBase {
    contentType: string;
    googleAnalyticsAdminV1alphaListFirebaseLinksResponse?: shared.GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse;
    statusCode: number;
}
