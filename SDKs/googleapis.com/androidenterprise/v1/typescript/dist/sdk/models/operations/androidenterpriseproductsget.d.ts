import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidenterpriseProductsGetPathParams extends SpeakeasyBase {
    enterpriseId: string;
    productId: string;
}
export declare class AndroidenterpriseProductsGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    language?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AndroidenterpriseProductsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidenterpriseProductsGetRequest extends SpeakeasyBase {
    pathParams: AndroidenterpriseProductsGetPathParams;
    queryParams: AndroidenterpriseProductsGetQueryParams;
    security: AndroidenterpriseProductsGetSecurity;
}
export declare class AndroidenterpriseProductsGetResponse extends SpeakeasyBase {
    contentType: string;
    product?: shared.Product;
    statusCode: number;
}
