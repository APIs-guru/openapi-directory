import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsadminPropertiesUserLinksBatchDeletePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AnalyticsadminPropertiesUserLinksBatchDeleteQueryParams extends SpeakeasyBase {
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
export declare class AnalyticsadminPropertiesUserLinksBatchDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsadminPropertiesUserLinksBatchDeleteRequest extends SpeakeasyBase {
    pathParams: AnalyticsadminPropertiesUserLinksBatchDeletePathParams;
    queryParams: AnalyticsadminPropertiesUserLinksBatchDeleteQueryParams;
    request?: shared.GoogleAnalyticsAdminV1alphaBatchDeleteUserLinksRequest;
    security: AnalyticsadminPropertiesUserLinksBatchDeleteSecurity;
}
export declare class AnalyticsadminPropertiesUserLinksBatchDeleteResponse extends SpeakeasyBase {
    contentType: string;
    googleProtobufEmpty?: Map<string, any>;
    statusCode: number;
}
