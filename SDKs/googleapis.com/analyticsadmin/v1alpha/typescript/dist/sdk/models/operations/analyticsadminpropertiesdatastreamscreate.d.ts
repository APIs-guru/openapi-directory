import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsadminPropertiesDataStreamsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AnalyticsadminPropertiesDataStreamsCreateQueryParams extends SpeakeasyBase {
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
export declare class AnalyticsadminPropertiesDataStreamsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsadminPropertiesDataStreamsCreateRequest extends SpeakeasyBase {
    pathParams: AnalyticsadminPropertiesDataStreamsCreatePathParams;
    queryParams: AnalyticsadminPropertiesDataStreamsCreateQueryParams;
    request?: shared.GoogleAnalyticsAdminV1alphaDataStreamInput;
    security: AnalyticsadminPropertiesDataStreamsCreateSecurity;
}
export declare class AnalyticsadminPropertiesDataStreamsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleAnalyticsAdminV1alphaDataStream?: shared.GoogleAnalyticsAdminV1alphaDataStream;
    statusCode: number;
}
