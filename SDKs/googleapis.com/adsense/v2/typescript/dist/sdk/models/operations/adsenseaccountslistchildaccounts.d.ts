import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdsenseAccountsListChildAccountsPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AdsenseAccountsListChildAccountsQueryParams extends SpeakeasyBase {
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
export declare class AdsenseAccountsListChildAccountsSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsListChildAccountsSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsListChildAccountsSecurity extends SpeakeasyBase {
    option1?: AdsenseAccountsListChildAccountsSecurityOption1;
    option2?: AdsenseAccountsListChildAccountsSecurityOption2;
}
export declare class AdsenseAccountsListChildAccountsRequest extends SpeakeasyBase {
    pathParams: AdsenseAccountsListChildAccountsPathParams;
    queryParams: AdsenseAccountsListChildAccountsQueryParams;
    security: AdsenseAccountsListChildAccountsSecurity;
}
export declare class AdsenseAccountsListChildAccountsResponse extends SpeakeasyBase {
    contentType: string;
    listChildAccountsResponse?: shared.ListChildAccountsResponse;
    statusCode: number;
}
