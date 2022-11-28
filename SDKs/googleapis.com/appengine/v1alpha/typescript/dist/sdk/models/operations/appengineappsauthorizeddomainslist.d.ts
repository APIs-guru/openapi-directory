import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppengineAppsAuthorizedDomainsListPathParams extends SpeakeasyBase {
    appsId: string;
}
export declare class AppengineAppsAuthorizedDomainsListQueryParams extends SpeakeasyBase {
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
export declare class AppengineAppsAuthorizedDomainsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsAuthorizedDomainsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsAuthorizedDomainsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsAuthorizedDomainsListSecurity extends SpeakeasyBase {
    option1?: AppengineAppsAuthorizedDomainsListSecurityOption1;
    option2?: AppengineAppsAuthorizedDomainsListSecurityOption2;
    option3?: AppengineAppsAuthorizedDomainsListSecurityOption3;
}
export declare class AppengineAppsAuthorizedDomainsListRequest extends SpeakeasyBase {
    pathParams: AppengineAppsAuthorizedDomainsListPathParams;
    queryParams: AppengineAppsAuthorizedDomainsListQueryParams;
    security: AppengineAppsAuthorizedDomainsListSecurity;
}
export declare class AppengineAppsAuthorizedDomainsListResponse extends SpeakeasyBase {
    contentType: string;
    listAuthorizedDomainsResponse?: shared.ListAuthorizedDomainsResponse;
    statusCode: number;
}
