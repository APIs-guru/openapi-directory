import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsadminPropertiesDataStreamsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AnalyticsadminPropertiesDataStreamsListQueryParams extends SpeakeasyBase {
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
export declare class AnalyticsadminPropertiesDataStreamsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsadminPropertiesDataStreamsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsadminPropertiesDataStreamsListSecurity extends SpeakeasyBase {
    option1?: AnalyticsadminPropertiesDataStreamsListSecurityOption1;
    option2?: AnalyticsadminPropertiesDataStreamsListSecurityOption2;
}
export declare class AnalyticsadminPropertiesDataStreamsListRequest extends SpeakeasyBase {
    pathParams: AnalyticsadminPropertiesDataStreamsListPathParams;
    queryParams: AnalyticsadminPropertiesDataStreamsListQueryParams;
    security: AnalyticsadminPropertiesDataStreamsListSecurity;
}
export declare class AnalyticsadminPropertiesDataStreamsListResponse extends SpeakeasyBase {
    contentType: string;
    googleAnalyticsAdminV1alphaListDataStreamsResponse?: shared.GoogleAnalyticsAdminV1alphaListDataStreamsResponse;
    statusCode: number;
}
