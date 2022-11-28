import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsMetadataColumnsListPathParams extends SpeakeasyBase {
    reportType: string;
}
export declare class AnalyticsMetadataColumnsListQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AnalyticsMetadataColumnsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsMetadataColumnsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsMetadataColumnsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsMetadataColumnsListSecurity extends SpeakeasyBase {
    option1?: AnalyticsMetadataColumnsListSecurityOption1;
    option2?: AnalyticsMetadataColumnsListSecurityOption2;
    option3?: AnalyticsMetadataColumnsListSecurityOption3;
}
export declare class AnalyticsMetadataColumnsListRequest extends SpeakeasyBase {
    pathParams: AnalyticsMetadataColumnsListPathParams;
    queryParams: AnalyticsMetadataColumnsListQueryParams;
    security: AnalyticsMetadataColumnsListSecurity;
}
export declare class AnalyticsMetadataColumnsListResponse extends SpeakeasyBase {
    columns?: shared.Columns;
    contentType: string;
    statusCode: number;
}
