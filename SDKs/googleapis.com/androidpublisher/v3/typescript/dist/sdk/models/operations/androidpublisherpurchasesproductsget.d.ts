import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherPurchasesProductsGetPathParams extends SpeakeasyBase {
    packageName: string;
    productId: string;
    token: string;
}
export declare class AndroidpublisherPurchasesProductsGetQueryParams extends SpeakeasyBase {
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
export declare class AndroidpublisherPurchasesProductsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherPurchasesProductsGetRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherPurchasesProductsGetPathParams;
    queryParams: AndroidpublisherPurchasesProductsGetQueryParams;
    security: AndroidpublisherPurchasesProductsGetSecurity;
}
export declare class AndroidpublisherPurchasesProductsGetResponse extends SpeakeasyBase {
    contentType: string;
    productPurchase?: shared.ProductPurchase;
    statusCode: number;
}
