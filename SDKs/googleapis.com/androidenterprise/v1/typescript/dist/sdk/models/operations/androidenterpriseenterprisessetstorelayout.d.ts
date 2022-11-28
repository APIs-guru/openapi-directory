import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidenterpriseEnterprisesSetStoreLayoutPathParams extends SpeakeasyBase {
    enterpriseId: string;
}
export declare class AndroidenterpriseEnterprisesSetStoreLayoutQueryParams extends SpeakeasyBase {
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
export declare class AndroidenterpriseEnterprisesSetStoreLayoutSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidenterpriseEnterprisesSetStoreLayoutRequest extends SpeakeasyBase {
    pathParams: AndroidenterpriseEnterprisesSetStoreLayoutPathParams;
    queryParams: AndroidenterpriseEnterprisesSetStoreLayoutQueryParams;
    request?: shared.StoreLayout;
    security: AndroidenterpriseEnterprisesSetStoreLayoutSecurity;
}
export declare class AndroidenterpriseEnterprisesSetStoreLayoutResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    storeLayout?: shared.StoreLayout;
}
