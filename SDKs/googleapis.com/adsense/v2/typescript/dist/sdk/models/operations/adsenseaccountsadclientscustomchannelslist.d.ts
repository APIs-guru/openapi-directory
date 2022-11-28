import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdsenseAccountsAdclientsCustomchannelsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AdsenseAccountsAdclientsCustomchannelsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AdsenseAccountsAdclientsCustomchannelsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsAdclientsCustomchannelsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsAdclientsCustomchannelsListSecurity extends SpeakeasyBase {
    option1?: AdsenseAccountsAdclientsCustomchannelsListSecurityOption1;
    option2?: AdsenseAccountsAdclientsCustomchannelsListSecurityOption2;
}
export declare class AdsenseAccountsAdclientsCustomchannelsListRequest extends SpeakeasyBase {
    pathParams: AdsenseAccountsAdclientsCustomchannelsListPathParams;
    queryParams: AdsenseAccountsAdclientsCustomchannelsListQueryParams;
    security: AdsenseAccountsAdclientsCustomchannelsListSecurity;
}
export declare class AdsenseAccountsAdclientsCustomchannelsListResponse extends SpeakeasyBase {
    contentType: string;
    listCustomChannelsResponse?: shared.ListCustomChannelsResponse;
    statusCode: number;
}
