import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidenterpriseWebappsDeletePathParams extends SpeakeasyBase {
    enterpriseId: string;
    webAppId: string;
}
export declare class AndroidenterpriseWebappsDeleteQueryParams extends SpeakeasyBase {
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
export declare class AndroidenterpriseWebappsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidenterpriseWebappsDeleteRequest extends SpeakeasyBase {
    pathParams: AndroidenterpriseWebappsDeletePathParams;
    queryParams: AndroidenterpriseWebappsDeleteQueryParams;
    security: AndroidenterpriseWebappsDeleteSecurity;
}
export declare class AndroidenterpriseWebappsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
