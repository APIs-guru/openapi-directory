import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidenterpriseProductsApprovePathParams extends SpeakeasyBase {
    enterpriseId: string;
    productId: string;
}
export declare class AndroidenterpriseProductsApproveQueryParams extends SpeakeasyBase {
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
export declare class AndroidenterpriseProductsApproveSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidenterpriseProductsApproveRequest extends SpeakeasyBase {
    pathParams: AndroidenterpriseProductsApprovePathParams;
    queryParams: AndroidenterpriseProductsApproveQueryParams;
    request?: shared.ProductsApproveRequest;
    security: AndroidenterpriseProductsApproveSecurity;
}
export declare class AndroidenterpriseProductsApproveResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
