import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdsenseAccountsAdclientsCustomchannelsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class AdsenseAccountsAdclientsCustomchannelsDeleteQueryParams extends SpeakeasyBase {
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
export declare class AdsenseAccountsAdclientsCustomchannelsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsAdclientsCustomchannelsDeleteRequest extends SpeakeasyBase {
    pathParams: AdsenseAccountsAdclientsCustomchannelsDeletePathParams;
    queryParams: AdsenseAccountsAdclientsCustomchannelsDeleteQueryParams;
    security: AdsenseAccountsAdclientsCustomchannelsDeleteSecurity;
}
export declare class AdsenseAccountsAdclientsCustomchannelsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
