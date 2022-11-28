import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidenterpriseEnterprisesGetStoreLayoutPathParams extends SpeakeasyBase {
    enterpriseId: string;
}
export declare class AndroidenterpriseEnterprisesGetStoreLayoutQueryParams extends SpeakeasyBase {
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
export declare class AndroidenterpriseEnterprisesGetStoreLayoutSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidenterpriseEnterprisesGetStoreLayoutRequest extends SpeakeasyBase {
    pathParams: AndroidenterpriseEnterprisesGetStoreLayoutPathParams;
    queryParams: AndroidenterpriseEnterprisesGetStoreLayoutQueryParams;
    security: AndroidenterpriseEnterprisesGetStoreLayoutSecurity;
}
export declare class AndroidenterpriseEnterprisesGetStoreLayoutResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    storeLayout?: shared.StoreLayout;
}
