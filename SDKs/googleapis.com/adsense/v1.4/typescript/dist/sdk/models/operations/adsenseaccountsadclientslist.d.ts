import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdsenseAccountsAdclientsListPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class AdsenseAccountsAdclientsListQueryParams extends SpeakeasyBase {
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
export declare class AdsenseAccountsAdclientsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsAdclientsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsAdclientsListSecurity extends SpeakeasyBase {
    option1?: AdsenseAccountsAdclientsListSecurityOption1;
    option2?: AdsenseAccountsAdclientsListSecurityOption2;
}
export declare class AdsenseAccountsAdclientsListRequest extends SpeakeasyBase {
    pathParams: AdsenseAccountsAdclientsListPathParams;
    queryParams: AdsenseAccountsAdclientsListQueryParams;
    security: AdsenseAccountsAdclientsListSecurity;
}
export declare class AdsenseAccountsAdclientsListResponse extends SpeakeasyBase {
    adClients?: shared.AdClients;
    contentType: string;
    statusCode: number;
}
