import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherPurchasesProductsGetPathParams extends SpeakeasyBase {
    packageName: string;
    productId: string;
    token: string;
}
export declare class AndroidpublisherPurchasesProductsGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
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
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
