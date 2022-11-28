import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppengineAppsFirewallIngressRulesListPathParams extends SpeakeasyBase {
    appsId: string;
}
export declare class AppengineAppsFirewallIngressRulesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    matchingAddress?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AppengineAppsFirewallIngressRulesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsFirewallIngressRulesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsFirewallIngressRulesListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsFirewallIngressRulesListSecurity extends SpeakeasyBase {
    option1?: AppengineAppsFirewallIngressRulesListSecurityOption1;
    option2?: AppengineAppsFirewallIngressRulesListSecurityOption2;
    option3?: AppengineAppsFirewallIngressRulesListSecurityOption3;
}
export declare class AppengineAppsFirewallIngressRulesListRequest extends SpeakeasyBase {
    pathParams: AppengineAppsFirewallIngressRulesListPathParams;
    queryParams: AppengineAppsFirewallIngressRulesListQueryParams;
    security: AppengineAppsFirewallIngressRulesListSecurity;
}
export declare class AppengineAppsFirewallIngressRulesListResponse extends SpeakeasyBase {
    contentType: string;
    listIngressRulesResponse?: shared.ListIngressRulesResponse;
    statusCode: number;
}
