import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidenterpriseProductsGetPermissionsPathParams extends SpeakeasyBase {
    enterpriseId: string;
    productId: string;
}
export declare class AndroidenterpriseProductsGetPermissionsQueryParams extends SpeakeasyBase {
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
export declare class AndroidenterpriseProductsGetPermissionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidenterpriseProductsGetPermissionsRequest extends SpeakeasyBase {
    pathParams: AndroidenterpriseProductsGetPermissionsPathParams;
    queryParams: AndroidenterpriseProductsGetPermissionsQueryParams;
    security: AndroidenterpriseProductsGetPermissionsSecurity;
}
export declare class AndroidenterpriseProductsGetPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    productPermissions?: shared.ProductPermissions;
    statusCode: number;
}
