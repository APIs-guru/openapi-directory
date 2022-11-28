import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdsenseMetadataMetricsListQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdsenseMetadataMetricsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseMetadataMetricsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseMetadataMetricsListSecurity extends SpeakeasyBase {
    option1?: AdsenseMetadataMetricsListSecurityOption1;
    option2?: AdsenseMetadataMetricsListSecurityOption2;
}
export declare class AdsenseMetadataMetricsListRequest extends SpeakeasyBase {
    queryParams: AdsenseMetadataMetricsListQueryParams;
    security: AdsenseMetadataMetricsListSecurity;
}
export declare class AdsenseMetadataMetricsListResponse extends SpeakeasyBase {
    contentType: string;
    metadata?: shared.Metadata;
    statusCode: number;
}
