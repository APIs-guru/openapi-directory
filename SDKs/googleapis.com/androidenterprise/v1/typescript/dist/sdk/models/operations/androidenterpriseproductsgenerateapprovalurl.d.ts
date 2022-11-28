import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidenterpriseProductsGenerateApprovalUrlPathParams extends SpeakeasyBase {
    enterpriseId: string;
    productId: string;
}
export declare class AndroidenterpriseProductsGenerateApprovalUrlQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    languageCode?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AndroidenterpriseProductsGenerateApprovalUrlSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidenterpriseProductsGenerateApprovalUrlRequest extends SpeakeasyBase {
    pathParams: AndroidenterpriseProductsGenerateApprovalUrlPathParams;
    queryParams: AndroidenterpriseProductsGenerateApprovalUrlQueryParams;
    security: AndroidenterpriseProductsGenerateApprovalUrlSecurity;
}
export declare class AndroidenterpriseProductsGenerateApprovalUrlResponse extends SpeakeasyBase {
    contentType: string;
    productsGenerateApprovalUrlResponse?: shared.ProductsGenerateApprovalUrlResponse;
    statusCode: number;
}
