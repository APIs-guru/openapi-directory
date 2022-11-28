import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidenterpriseEntitlementsDeletePathParams extends SpeakeasyBase {
    enterpriseId: string;
    entitlementId: string;
    userId: string;
}
export declare class AndroidenterpriseEntitlementsDeleteQueryParams extends SpeakeasyBase {
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
export declare class AndroidenterpriseEntitlementsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidenterpriseEntitlementsDeleteRequest extends SpeakeasyBase {
    pathParams: AndroidenterpriseEntitlementsDeletePathParams;
    queryParams: AndroidenterpriseEntitlementsDeleteQueryParams;
    security: AndroidenterpriseEntitlementsDeleteSecurity;
}
export declare class AndroidenterpriseEntitlementsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
