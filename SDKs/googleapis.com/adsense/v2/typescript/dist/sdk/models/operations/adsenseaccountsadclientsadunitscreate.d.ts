import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdsenseAccountsAdclientsAdunitsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AdsenseAccountsAdclientsAdunitsCreateQueryParams extends SpeakeasyBase {
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
export declare class AdsenseAccountsAdclientsAdunitsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsAdclientsAdunitsCreateRequest extends SpeakeasyBase {
    pathParams: AdsenseAccountsAdclientsAdunitsCreatePathParams;
    queryParams: AdsenseAccountsAdclientsAdunitsCreateQueryParams;
    request?: shared.AdUnitInput;
    security: AdsenseAccountsAdclientsAdunitsCreateSecurity;
}
export declare class AdsenseAccountsAdclientsAdunitsCreateResponse extends SpeakeasyBase {
    adUnit?: shared.AdUnit;
    contentType: string;
    statusCode: number;
}
