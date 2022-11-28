import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdsenseAccountsAdclientsGetAdCodePathParams extends SpeakeasyBase {
    accountId: string;
    adClientId: string;
}
export declare class AdsenseAccountsAdclientsGetAdCodeQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    tagPartner?: string;
    userIp?: string;
}
export declare class AdsenseAccountsAdclientsGetAdCodeSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsAdclientsGetAdCodeSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsAdclientsGetAdCodeSecurity extends SpeakeasyBase {
    option1?: AdsenseAccountsAdclientsGetAdCodeSecurityOption1;
    option2?: AdsenseAccountsAdclientsGetAdCodeSecurityOption2;
}
export declare class AdsenseAccountsAdclientsGetAdCodeRequest extends SpeakeasyBase {
    pathParams: AdsenseAccountsAdclientsGetAdCodePathParams;
    queryParams: AdsenseAccountsAdclientsGetAdCodeQueryParams;
    security: AdsenseAccountsAdclientsGetAdCodeSecurity;
}
export declare class AdsenseAccountsAdclientsGetAdCodeResponse extends SpeakeasyBase {
    adCode?: shared.AdCode;
    contentType: string;
    statusCode: number;
}
