import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdsenseAccountsAdclientsCustomchannelsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class AdsenseAccountsAdclientsCustomchannelsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AdsenseAccountsAdclientsCustomchannelsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsAdclientsCustomchannelsPatchRequest extends SpeakeasyBase {
    pathParams: AdsenseAccountsAdclientsCustomchannelsPatchPathParams;
    queryParams: AdsenseAccountsAdclientsCustomchannelsPatchQueryParams;
    request?: shared.CustomChannelInput;
    security: AdsenseAccountsAdclientsCustomchannelsPatchSecurity;
}
export declare class AdsenseAccountsAdclientsCustomchannelsPatchResponse extends SpeakeasyBase {
    contentType: string;
    customChannel?: shared.CustomChannel;
    statusCode: number;
}
