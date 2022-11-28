import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdsenseAccountsCustomchannelsGetPathParams extends SpeakeasyBase {
    accountId: string;
    adClientId: string;
    customChannelId: string;
}
export declare class AdsenseAccountsCustomchannelsGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdsenseAccountsCustomchannelsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsCustomchannelsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsCustomchannelsGetSecurity extends SpeakeasyBase {
    option1?: AdsenseAccountsCustomchannelsGetSecurityOption1;
    option2?: AdsenseAccountsCustomchannelsGetSecurityOption2;
}
export declare class AdsenseAccountsCustomchannelsGetRequest extends SpeakeasyBase {
    pathParams: AdsenseAccountsCustomchannelsGetPathParams;
    queryParams: AdsenseAccountsCustomchannelsGetQueryParams;
    security: AdsenseAccountsCustomchannelsGetSecurity;
}
export declare class AdsenseAccountsCustomchannelsGetResponse extends SpeakeasyBase {
    contentType: string;
    customChannel?: shared.CustomChannel;
    statusCode: number;
}
