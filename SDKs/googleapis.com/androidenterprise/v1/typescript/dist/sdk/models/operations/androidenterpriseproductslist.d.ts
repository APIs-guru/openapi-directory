import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidenterpriseProductsListPathParams extends SpeakeasyBase {
    enterpriseId: string;
}
export declare class AndroidenterpriseProductsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    approved?: boolean;
    callback?: string;
    fields?: string;
    key?: string;
    language?: string;
    maxResults?: number;
    oauthToken?: string;
    prettyPrint?: boolean;
    query?: string;
    quotaUser?: string;
    token?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AndroidenterpriseProductsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidenterpriseProductsListRequest extends SpeakeasyBase {
    pathParams: AndroidenterpriseProductsListPathParams;
    queryParams: AndroidenterpriseProductsListQueryParams;
    security: AndroidenterpriseProductsListSecurity;
}
export declare class AndroidenterpriseProductsListResponse extends SpeakeasyBase {
    contentType: string;
    productsListResponse?: shared.ProductsListResponse;
    statusCode: number;
}
