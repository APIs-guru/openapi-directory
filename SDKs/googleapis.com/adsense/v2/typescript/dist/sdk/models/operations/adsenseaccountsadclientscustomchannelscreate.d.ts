import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdsenseAccountsAdclientsCustomchannelsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AdsenseAccountsAdclientsCustomchannelsCreateQueryParams extends SpeakeasyBase {
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
export declare class AdsenseAccountsAdclientsCustomchannelsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsAdclientsCustomchannelsCreateRequest extends SpeakeasyBase {
    pathParams: AdsenseAccountsAdclientsCustomchannelsCreatePathParams;
    queryParams: AdsenseAccountsAdclientsCustomchannelsCreateQueryParams;
    request?: shared.CustomChannelInput;
    security: AdsenseAccountsAdclientsCustomchannelsCreateSecurity;
}
export declare class AdsenseAccountsAdclientsCustomchannelsCreateResponse extends SpeakeasyBase {
    contentType: string;
    customChannel?: shared.CustomChannel;
    statusCode: number;
}
