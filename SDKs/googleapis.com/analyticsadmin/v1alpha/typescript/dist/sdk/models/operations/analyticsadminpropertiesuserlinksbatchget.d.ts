import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsadminPropertiesUserLinksBatchGetPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AnalyticsadminPropertiesUserLinksBatchGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    names?: string[];
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AnalyticsadminPropertiesUserLinksBatchGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsadminPropertiesUserLinksBatchGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsadminPropertiesUserLinksBatchGetSecurity extends SpeakeasyBase {
    option1?: AnalyticsadminPropertiesUserLinksBatchGetSecurityOption1;
    option2?: AnalyticsadminPropertiesUserLinksBatchGetSecurityOption2;
}
export declare class AnalyticsadminPropertiesUserLinksBatchGetRequest extends SpeakeasyBase {
    pathParams: AnalyticsadminPropertiesUserLinksBatchGetPathParams;
    queryParams: AnalyticsadminPropertiesUserLinksBatchGetQueryParams;
    security: AnalyticsadminPropertiesUserLinksBatchGetSecurity;
}
export declare class AnalyticsadminPropertiesUserLinksBatchGetResponse extends SpeakeasyBase {
    contentType: string;
    googleAnalyticsAdminV1alphaBatchGetUserLinksResponse?: shared.GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse;
    statusCode: number;
}
