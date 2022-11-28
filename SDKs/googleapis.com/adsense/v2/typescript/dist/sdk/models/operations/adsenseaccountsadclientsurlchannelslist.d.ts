import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdsenseAccountsAdclientsUrlchannelsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AdsenseAccountsAdclientsUrlchannelsListQueryParams extends SpeakeasyBase {
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
export declare class AdsenseAccountsAdclientsUrlchannelsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsAdclientsUrlchannelsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsAdclientsUrlchannelsListSecurity extends SpeakeasyBase {
    option1?: AdsenseAccountsAdclientsUrlchannelsListSecurityOption1;
    option2?: AdsenseAccountsAdclientsUrlchannelsListSecurityOption2;
}
export declare class AdsenseAccountsAdclientsUrlchannelsListRequest extends SpeakeasyBase {
    pathParams: AdsenseAccountsAdclientsUrlchannelsListPathParams;
    queryParams: AdsenseAccountsAdclientsUrlchannelsListQueryParams;
    security: AdsenseAccountsAdclientsUrlchannelsListSecurity;
}
export declare class AdsenseAccountsAdclientsUrlchannelsListResponse extends SpeakeasyBase {
    contentType: string;
    listUrlChannelsResponse?: shared.ListUrlChannelsResponse;
    statusCode: number;
}
