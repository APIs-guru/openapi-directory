import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidenterpriseWebappsGetPathParams extends SpeakeasyBase {
    enterpriseId: string;
    webAppId: string;
}
export declare class AndroidenterpriseWebappsGetQueryParams extends SpeakeasyBase {
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
export declare class AndroidenterpriseWebappsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidenterpriseWebappsGetRequest extends SpeakeasyBase {
    pathParams: AndroidenterpriseWebappsGetPathParams;
    queryParams: AndroidenterpriseWebappsGetQueryParams;
    security: AndroidenterpriseWebappsGetSecurity;
}
export declare class AndroidenterpriseWebappsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    webApp?: shared.WebApp;
}
