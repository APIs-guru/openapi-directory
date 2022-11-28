import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsadminPropertiesUserLinksBatchCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AnalyticsadminPropertiesUserLinksBatchCreateQueryParams extends SpeakeasyBase {
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
export declare class AnalyticsadminPropertiesUserLinksBatchCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsadminPropertiesUserLinksBatchCreateRequest extends SpeakeasyBase {
    pathParams: AnalyticsadminPropertiesUserLinksBatchCreatePathParams;
    queryParams: AnalyticsadminPropertiesUserLinksBatchCreateQueryParams;
    request?: shared.GoogleAnalyticsAdminV1alphaBatchCreateUserLinksRequestInput;
    security: AnalyticsadminPropertiesUserLinksBatchCreateSecurity;
}
export declare class AnalyticsadminPropertiesUserLinksBatchCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleAnalyticsAdminV1alphaBatchCreateUserLinksResponse?: shared.GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse;
    statusCode: number;
}
