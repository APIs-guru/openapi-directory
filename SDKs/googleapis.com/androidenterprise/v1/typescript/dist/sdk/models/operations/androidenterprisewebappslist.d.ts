import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidenterpriseWebappsListPathParams extends SpeakeasyBase {
    enterpriseId: string;
}
export declare class AndroidenterpriseWebappsListQueryParams extends SpeakeasyBase {
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
export declare class AndroidenterpriseWebappsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidenterpriseWebappsListRequest extends SpeakeasyBase {
    pathParams: AndroidenterpriseWebappsListPathParams;
    queryParams: AndroidenterpriseWebappsListQueryParams;
    security: AndroidenterpriseWebappsListSecurity;
}
export declare class AndroidenterpriseWebappsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    webAppsListResponse?: shared.WebAppsListResponse;
}
