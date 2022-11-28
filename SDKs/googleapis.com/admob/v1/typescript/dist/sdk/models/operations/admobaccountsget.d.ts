import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdmobAccountsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class AdmobAccountsGetQueryParams extends SpeakeasyBase {
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
export declare class AdmobAccountsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdmobAccountsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdmobAccountsGetSecurity extends SpeakeasyBase {
    option1?: AdmobAccountsGetSecurityOption1;
    option2?: AdmobAccountsGetSecurityOption2;
}
export declare class AdmobAccountsGetRequest extends SpeakeasyBase {
    pathParams: AdmobAccountsGetPathParams;
    queryParams: AdmobAccountsGetQueryParams;
    security: AdmobAccountsGetSecurity;
}
export declare class AdmobAccountsGetResponse extends SpeakeasyBase {
    contentType: string;
    publisherAccount?: shared.PublisherAccount;
    statusCode: number;
}
