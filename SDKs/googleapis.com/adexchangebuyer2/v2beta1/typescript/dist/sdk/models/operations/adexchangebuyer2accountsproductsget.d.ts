import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class Adexchangebuyer2AccountsProductsGetPathParams extends SpeakeasyBase {
    accountId: string;
    productId: string;
}
export declare class Adexchangebuyer2AccountsProductsGetQueryParams extends SpeakeasyBase {
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
export declare class Adexchangebuyer2AccountsProductsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Adexchangebuyer2AccountsProductsGetRequest extends SpeakeasyBase {
    pathParams: Adexchangebuyer2AccountsProductsGetPathParams;
    queryParams: Adexchangebuyer2AccountsProductsGetQueryParams;
    security: Adexchangebuyer2AccountsProductsGetSecurity;
}
export declare class Adexchangebuyer2AccountsProductsGetResponse extends SpeakeasyBase {
    contentType: string;
    product?: shared.Product;
    statusCode: number;
}
