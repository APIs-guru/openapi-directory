import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidenterpriseWebappsInsertPathParams extends SpeakeasyBase {
    enterpriseId: string;
}
export declare class AndroidenterpriseWebappsInsertQueryParams extends SpeakeasyBase {
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
export declare class AndroidenterpriseWebappsInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidenterpriseWebappsInsertRequest extends SpeakeasyBase {
    pathParams: AndroidenterpriseWebappsInsertPathParams;
    queryParams: AndroidenterpriseWebappsInsertQueryParams;
    request?: shared.WebApp;
    security: AndroidenterpriseWebappsInsertSecurity;
}
export declare class AndroidenterpriseWebappsInsertResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    webApp?: shared.WebApp;
}
