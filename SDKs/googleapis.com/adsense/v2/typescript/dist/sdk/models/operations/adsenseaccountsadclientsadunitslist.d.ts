import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdsenseAccountsAdclientsAdunitsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AdsenseAccountsAdclientsAdunitsListQueryParams extends SpeakeasyBase {
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
export declare class AdsenseAccountsAdclientsAdunitsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsAdclientsAdunitsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsAdclientsAdunitsListSecurity extends SpeakeasyBase {
    option1?: AdsenseAccountsAdclientsAdunitsListSecurityOption1;
    option2?: AdsenseAccountsAdclientsAdunitsListSecurityOption2;
}
export declare class AdsenseAccountsAdclientsAdunitsListRequest extends SpeakeasyBase {
    pathParams: AdsenseAccountsAdclientsAdunitsListPathParams;
    queryParams: AdsenseAccountsAdclientsAdunitsListQueryParams;
    security: AdsenseAccountsAdclientsAdunitsListSecurity;
}
export declare class AdsenseAccountsAdclientsAdunitsListResponse extends SpeakeasyBase {
    contentType: string;
    listAdUnitsResponse?: shared.ListAdUnitsResponse;
    statusCode: number;
}
