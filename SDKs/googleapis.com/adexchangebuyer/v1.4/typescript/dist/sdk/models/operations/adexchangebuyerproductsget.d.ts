import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdexchangebuyerProductsGetPathParams extends SpeakeasyBase {
    productId: string;
}
export declare class AdexchangebuyerProductsGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdexchangebuyerProductsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdexchangebuyerProductsGetRequest extends SpeakeasyBase {
    pathParams: AdexchangebuyerProductsGetPathParams;
    queryParams: AdexchangebuyerProductsGetQueryParams;
    security: AdexchangebuyerProductsGetSecurity;
}
export declare class AdexchangebuyerProductsGetResponse extends SpeakeasyBase {
    contentType: string;
    product?: shared.Product;
    statusCode: number;
}
