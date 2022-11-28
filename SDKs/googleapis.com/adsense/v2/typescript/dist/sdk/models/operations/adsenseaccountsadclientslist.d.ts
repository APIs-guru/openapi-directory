import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdsenseAccountsAdclientsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AdsenseAccountsAdclientsListQueryParams extends SpeakeasyBase {
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
    contentType: string;
    listAdClientsResponse?: shared.ListAdClientsResponse;
    statusCode: number;
}
