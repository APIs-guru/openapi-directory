import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdsenseAccountsAdclientsAdunitsGetAdcodePathParams extends SpeakeasyBase {
    name: string;
}
export declare class AdsenseAccountsAdclientsAdunitsGetAdcodeQueryParams extends SpeakeasyBase {
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
export declare class AdsenseAccountsAdclientsAdunitsGetAdcodeSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsAdclientsAdunitsGetAdcodeSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsAdclientsAdunitsGetAdcodeSecurity extends SpeakeasyBase {
    option1?: AdsenseAccountsAdclientsAdunitsGetAdcodeSecurityOption1;
    option2?: AdsenseAccountsAdclientsAdunitsGetAdcodeSecurityOption2;
}
export declare class AdsenseAccountsAdclientsAdunitsGetAdcodeRequest extends SpeakeasyBase {
    pathParams: AdsenseAccountsAdclientsAdunitsGetAdcodePathParams;
    queryParams: AdsenseAccountsAdclientsAdunitsGetAdcodeQueryParams;
    security: AdsenseAccountsAdclientsAdunitsGetAdcodeSecurity;
}
export declare class AdsenseAccountsAdclientsAdunitsGetAdcodeResponse extends SpeakeasyBase {
    adUnitAdCode?: shared.AdUnitAdCode;
    contentType: string;
    statusCode: number;
}
