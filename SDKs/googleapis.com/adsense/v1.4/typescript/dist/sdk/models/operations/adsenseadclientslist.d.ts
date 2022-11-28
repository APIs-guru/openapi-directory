import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdsenseAdclientsListQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdsenseAdclientsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAdclientsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAdclientsListSecurity extends SpeakeasyBase {
    option1?: AdsenseAdclientsListSecurityOption1;
    option2?: AdsenseAdclientsListSecurityOption2;
}
export declare class AdsenseAdclientsListRequest extends SpeakeasyBase {
    queryParams: AdsenseAdclientsListQueryParams;
    security: AdsenseAdclientsListSecurity;
}
export declare class AdsenseAdclientsListResponse extends SpeakeasyBase {
    adClients?: shared.AdClients;
    contentType: string;
    statusCode: number;
}
