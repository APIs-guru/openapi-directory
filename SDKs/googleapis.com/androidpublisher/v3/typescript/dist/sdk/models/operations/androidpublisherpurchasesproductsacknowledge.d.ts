import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherPurchasesProductsAcknowledgePathParams extends SpeakeasyBase {
    packageName: string;
    productId: string;
    token: string;
}
export declare class AndroidpublisherPurchasesProductsAcknowledgeQueryParams extends SpeakeasyBase {
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
export declare class AndroidpublisherPurchasesProductsAcknowledgeSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherPurchasesProductsAcknowledgeRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherPurchasesProductsAcknowledgePathParams;
    queryParams: AndroidpublisherPurchasesProductsAcknowledgeQueryParams;
    request?: shared.ProductPurchasesAcknowledgeRequest;
    security: AndroidpublisherPurchasesProductsAcknowledgeSecurity;
}
export declare class AndroidpublisherPurchasesProductsAcknowledgeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
