import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsadminPropertiesAudiencesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AnalyticsadminPropertiesAudiencesCreateQueryParams extends SpeakeasyBase {
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
export declare class AnalyticsadminPropertiesAudiencesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsadminPropertiesAudiencesCreateRequest extends SpeakeasyBase {
    pathParams: AnalyticsadminPropertiesAudiencesCreatePathParams;
    queryParams: AnalyticsadminPropertiesAudiencesCreateQueryParams;
    request?: shared.GoogleAnalyticsAdminV1alphaAudienceInput;
    security: AnalyticsadminPropertiesAudiencesCreateSecurity;
}
export declare class AnalyticsadminPropertiesAudiencesCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleAnalyticsAdminV1alphaAudience?: shared.GoogleAnalyticsAdminV1alphaAudience;
    statusCode: number;
}
