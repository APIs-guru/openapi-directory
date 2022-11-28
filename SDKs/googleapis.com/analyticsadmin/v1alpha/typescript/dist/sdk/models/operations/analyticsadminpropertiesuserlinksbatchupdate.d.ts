import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsadminPropertiesUserLinksBatchUpdatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AnalyticsadminPropertiesUserLinksBatchUpdateQueryParams extends SpeakeasyBase {
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
export declare class AnalyticsadminPropertiesUserLinksBatchUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsadminPropertiesUserLinksBatchUpdateRequest extends SpeakeasyBase {
    pathParams: AnalyticsadminPropertiesUserLinksBatchUpdatePathParams;
    queryParams: AnalyticsadminPropertiesUserLinksBatchUpdateQueryParams;
    request?: shared.GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksRequestInput;
    security: AnalyticsadminPropertiesUserLinksBatchUpdateSecurity;
}
export declare class AnalyticsadminPropertiesUserLinksBatchUpdateResponse extends SpeakeasyBase {
    contentType: string;
    googleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse?: shared.GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse;
    statusCode: number;
}
