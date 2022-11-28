import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsadminPropertiesAcknowledgeUserDataCollectionPathParams extends SpeakeasyBase {
    property: string;
}
export declare class AnalyticsadminPropertiesAcknowledgeUserDataCollectionQueryParams extends SpeakeasyBase {
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
export declare class AnalyticsadminPropertiesAcknowledgeUserDataCollectionSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsadminPropertiesAcknowledgeUserDataCollectionRequest extends SpeakeasyBase {
    pathParams: AnalyticsadminPropertiesAcknowledgeUserDataCollectionPathParams;
    queryParams: AnalyticsadminPropertiesAcknowledgeUserDataCollectionQueryParams;
    request?: shared.GoogleAnalyticsAdminV1alphaAcknowledgeUserDataCollectionRequest;
    security: AnalyticsadminPropertiesAcknowledgeUserDataCollectionSecurity;
}
export declare class AnalyticsadminPropertiesAcknowledgeUserDataCollectionResponse extends SpeakeasyBase {
    contentType: string;
    googleAnalyticsAdminV1alphaAcknowledgeUserDataCollectionResponse?: Map<string, any>;
    statusCode: number;
}
