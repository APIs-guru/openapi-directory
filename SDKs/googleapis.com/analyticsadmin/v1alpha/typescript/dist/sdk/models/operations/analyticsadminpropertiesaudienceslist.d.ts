import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsadminPropertiesAudiencesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AnalyticsadminPropertiesAudiencesListQueryParams extends SpeakeasyBase {
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
export declare class AnalyticsadminPropertiesAudiencesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsadminPropertiesAudiencesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsadminPropertiesAudiencesListSecurity extends SpeakeasyBase {
    option1?: AnalyticsadminPropertiesAudiencesListSecurityOption1;
    option2?: AnalyticsadminPropertiesAudiencesListSecurityOption2;
}
export declare class AnalyticsadminPropertiesAudiencesListRequest extends SpeakeasyBase {
    pathParams: AnalyticsadminPropertiesAudiencesListPathParams;
    queryParams: AnalyticsadminPropertiesAudiencesListQueryParams;
    security: AnalyticsadminPropertiesAudiencesListSecurity;
}
export declare class AnalyticsadminPropertiesAudiencesListResponse extends SpeakeasyBase {
    contentType: string;
    googleAnalyticsAdminV1alphaListAudiencesResponse?: shared.GoogleAnalyticsAdminV1alphaListAudiencesResponse;
    statusCode: number;
}
