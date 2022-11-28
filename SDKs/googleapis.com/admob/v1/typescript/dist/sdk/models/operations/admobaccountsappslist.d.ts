import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdmobAccountsAppsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AdmobAccountsAppsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AdmobAccountsAppsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdmobAccountsAppsListRequest extends SpeakeasyBase {
    pathParams: AdmobAccountsAppsListPathParams;
    queryParams: AdmobAccountsAppsListQueryParams;
    security: AdmobAccountsAppsListSecurity;
}
export declare class AdmobAccountsAppsListResponse extends SpeakeasyBase {
    contentType: string;
    listAppsResponse?: shared.ListAppsResponse;
    statusCode: number;
}
