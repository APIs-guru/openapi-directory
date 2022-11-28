import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidenterpriseEntitlementsUpdatePathParams extends SpeakeasyBase {
    enterpriseId: string;
    entitlementId: string;
    userId: string;
}
export declare class AndroidenterpriseEntitlementsUpdateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    install?: boolean;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AndroidenterpriseEntitlementsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidenterpriseEntitlementsUpdateRequest extends SpeakeasyBase {
    pathParams: AndroidenterpriseEntitlementsUpdatePathParams;
    queryParams: AndroidenterpriseEntitlementsUpdateQueryParams;
    request?: shared.Entitlement;
    security: AndroidenterpriseEntitlementsUpdateSecurity;
}
export declare class AndroidenterpriseEntitlementsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    entitlement?: shared.Entitlement;
    statusCode: number;
}
