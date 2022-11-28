import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidenterpriseProductsUnapprovePathParams extends SpeakeasyBase {
    enterpriseId: string;
    productId: string;
}
export declare class AndroidenterpriseProductsUnapproveQueryParams extends SpeakeasyBase {
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
export declare class AndroidenterpriseProductsUnapproveSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidenterpriseProductsUnapproveRequest extends SpeakeasyBase {
    pathParams: AndroidenterpriseProductsUnapprovePathParams;
    queryParams: AndroidenterpriseProductsUnapproveQueryParams;
    security: AndroidenterpriseProductsUnapproveSecurity;
}
export declare class AndroidenterpriseProductsUnapproveResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
