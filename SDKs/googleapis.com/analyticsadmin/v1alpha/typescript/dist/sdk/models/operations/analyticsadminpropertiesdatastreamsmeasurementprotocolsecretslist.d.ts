import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListQueryParams extends SpeakeasyBase {
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
export declare class AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListSecurity extends SpeakeasyBase {
    option1?: AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListSecurityOption1;
    option2?: AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListSecurityOption2;
}
export declare class AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListRequest extends SpeakeasyBase {
    pathParams: AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListPathParams;
    queryParams: AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListQueryParams;
    security: AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListSecurity;
}
export declare class AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListResponse extends SpeakeasyBase {
    contentType: string;
    googleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse?: shared.GoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse;
    statusCode: number;
}
