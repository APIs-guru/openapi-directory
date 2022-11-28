import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidenterpriseEntitlementsListPathParams extends SpeakeasyBase {
    enterpriseId: string;
    userId: string;
}
export declare class AndroidenterpriseEntitlementsListQueryParams extends SpeakeasyBase {
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
export declare class AndroidenterpriseEntitlementsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidenterpriseEntitlementsListRequest extends SpeakeasyBase {
    pathParams: AndroidenterpriseEntitlementsListPathParams;
    queryParams: AndroidenterpriseEntitlementsListQueryParams;
    security: AndroidenterpriseEntitlementsListSecurity;
}
export declare class AndroidenterpriseEntitlementsListResponse extends SpeakeasyBase {
    contentType: string;
    entitlementsListResponse?: shared.EntitlementsListResponse;
    statusCode: number;
}
