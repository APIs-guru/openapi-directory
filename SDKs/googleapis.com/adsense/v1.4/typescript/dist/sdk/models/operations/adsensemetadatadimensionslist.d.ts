import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdsenseMetadataDimensionsListQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdsenseMetadataDimensionsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseMetadataDimensionsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseMetadataDimensionsListSecurity extends SpeakeasyBase {
    option1?: AdsenseMetadataDimensionsListSecurityOption1;
    option2?: AdsenseMetadataDimensionsListSecurityOption2;
}
export declare class AdsenseMetadataDimensionsListRequest extends SpeakeasyBase {
    queryParams: AdsenseMetadataDimensionsListQueryParams;
    security: AdsenseMetadataDimensionsListSecurity;
}
export declare class AdsenseMetadataDimensionsListResponse extends SpeakeasyBase {
    contentType: string;
    metadata?: shared.Metadata;
    statusCode: number;
}
