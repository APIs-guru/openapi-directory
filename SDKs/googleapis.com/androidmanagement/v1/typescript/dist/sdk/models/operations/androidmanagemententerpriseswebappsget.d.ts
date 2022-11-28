import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidmanagementEnterprisesWebAppsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class AndroidmanagementEnterprisesWebAppsGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AndroidmanagementEnterprisesWebAppsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidmanagementEnterprisesWebAppsGetRequest extends SpeakeasyBase {
    pathParams: AndroidmanagementEnterprisesWebAppsGetPathParams;
    queryParams: AndroidmanagementEnterprisesWebAppsGetQueryParams;
    security: AndroidmanagementEnterprisesWebAppsGetSecurity;
}
export declare class AndroidmanagementEnterprisesWebAppsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    webApp?: shared.WebApp;
}
