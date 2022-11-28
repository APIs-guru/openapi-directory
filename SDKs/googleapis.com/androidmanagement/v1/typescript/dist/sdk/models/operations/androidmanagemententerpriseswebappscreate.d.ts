import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidmanagementEnterprisesWebAppsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AndroidmanagementEnterprisesWebAppsCreateQueryParams extends SpeakeasyBase {
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
export declare class AndroidmanagementEnterprisesWebAppsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidmanagementEnterprisesWebAppsCreateRequest extends SpeakeasyBase {
    pathParams: AndroidmanagementEnterprisesWebAppsCreatePathParams;
    queryParams: AndroidmanagementEnterprisesWebAppsCreateQueryParams;
    request?: shared.WebApp;
    security: AndroidmanagementEnterprisesWebAppsCreateSecurity;
}
export declare class AndroidmanagementEnterprisesWebAppsCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    webApp?: shared.WebApp;
}
