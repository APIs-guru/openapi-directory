import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class Adexchangebuyer2AccountsProductsListPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class Adexchangebuyer2AccountsProductsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class Adexchangebuyer2AccountsProductsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Adexchangebuyer2AccountsProductsListRequest extends SpeakeasyBase {
    pathParams: Adexchangebuyer2AccountsProductsListPathParams;
    queryParams: Adexchangebuyer2AccountsProductsListQueryParams;
    security: Adexchangebuyer2AccountsProductsListSecurity;
}
export declare class Adexchangebuyer2AccountsProductsListResponse extends SpeakeasyBase {
    contentType: string;
    listProductsResponse?: shared.ListProductsResponse;
    statusCode: number;
}
