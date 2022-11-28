import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidenterpriseEntitlementsGetPathParams extends SpeakeasyBase {
    enterpriseId: string;
    entitlementId: string;
    userId: string;
}
export declare class AndroidenterpriseEntitlementsGetQueryParams extends SpeakeasyBase {
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
export declare class AndroidenterpriseEntitlementsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidenterpriseEntitlementsGetRequest extends SpeakeasyBase {
    pathParams: AndroidenterpriseEntitlementsGetPathParams;
    queryParams: AndroidenterpriseEntitlementsGetQueryParams;
    security: AndroidenterpriseEntitlementsGetSecurity;
}
export declare class AndroidenterpriseEntitlementsGetResponse extends SpeakeasyBase {
    contentType: string;
    entitlement?: shared.Entitlement;
    statusCode: number;
}
