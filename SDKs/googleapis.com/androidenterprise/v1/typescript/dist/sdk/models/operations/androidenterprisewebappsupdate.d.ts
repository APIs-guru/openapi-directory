import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidenterpriseWebappsUpdatePathParams extends SpeakeasyBase {
    enterpriseId: string;
    webAppId: string;
}
export declare class AndroidenterpriseWebappsUpdateQueryParams extends SpeakeasyBase {
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
export declare class AndroidenterpriseWebappsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidenterpriseWebappsUpdateRequest extends SpeakeasyBase {
    pathParams: AndroidenterpriseWebappsUpdatePathParams;
    queryParams: AndroidenterpriseWebappsUpdateQueryParams;
    request?: shared.WebApp;
    security: AndroidenterpriseWebappsUpdateSecurity;
}
export declare class AndroidenterpriseWebappsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    webApp?: shared.WebApp;
}
