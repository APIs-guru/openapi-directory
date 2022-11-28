import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsadminPropertiesUserLinksDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class AnalyticsadminPropertiesUserLinksDeleteQueryParams extends SpeakeasyBase {
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
export declare class AnalyticsadminPropertiesUserLinksDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsadminPropertiesUserLinksDeleteRequest extends SpeakeasyBase {
    pathParams: AnalyticsadminPropertiesUserLinksDeletePathParams;
    queryParams: AnalyticsadminPropertiesUserLinksDeleteQueryParams;
    security: AnalyticsadminPropertiesUserLinksDeleteSecurity;
}
export declare class AnalyticsadminPropertiesUserLinksDeleteResponse extends SpeakeasyBase {
    contentType: string;
    googleProtobufEmpty?: Map<string, any>;
    statusCode: number;
}
