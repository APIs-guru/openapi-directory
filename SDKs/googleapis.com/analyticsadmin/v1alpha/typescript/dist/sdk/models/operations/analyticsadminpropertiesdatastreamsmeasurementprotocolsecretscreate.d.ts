import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateQueryParams extends SpeakeasyBase {
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
export declare class AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateRequest extends SpeakeasyBase {
    pathParams: AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreatePathParams;
    queryParams: AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateQueryParams;
    request?: shared.GoogleAnalyticsAdminV1alphaMeasurementProtocolSecretInput;
    security: AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateSecurity;
}
export declare class AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleAnalyticsAdminV1alphaMeasurementProtocolSecret?: shared.GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret;
    statusCode: number;
}
