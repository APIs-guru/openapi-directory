import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AppengineAppsFirewallIngressRulesGetPathParams extends SpeakeasyBase {
    appsId: string;
    ingressRulesId: string;
}
export declare class AppengineAppsFirewallIngressRulesGetQueryParams extends SpeakeasyBase {
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
export declare class AppengineAppsFirewallIngressRulesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsFirewallIngressRulesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsFirewallIngressRulesGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsFirewallIngressRulesGetSecurity extends SpeakeasyBase {
    option1?: AppengineAppsFirewallIngressRulesGetSecurityOption1;
    option2?: AppengineAppsFirewallIngressRulesGetSecurityOption2;
    option3?: AppengineAppsFirewallIngressRulesGetSecurityOption3;
}
export declare class AppengineAppsFirewallIngressRulesGetRequest extends SpeakeasyBase {
    pathParams: AppengineAppsFirewallIngressRulesGetPathParams;
    queryParams: AppengineAppsFirewallIngressRulesGetQueryParams;
    security: AppengineAppsFirewallIngressRulesGetSecurity;
}
export declare class AppengineAppsFirewallIngressRulesGetResponse extends SpeakeasyBase {
    contentType: string;
    firewallRule?: shared.FirewallRule;
    statusCode: number;
}
