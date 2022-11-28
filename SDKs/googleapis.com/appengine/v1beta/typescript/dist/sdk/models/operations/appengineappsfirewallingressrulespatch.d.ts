import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppengineAppsFirewallIngressRulesPatchPathParams extends SpeakeasyBase {
    appsId: string;
    ingressRulesId: string;
}
export declare class AppengineAppsFirewallIngressRulesPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AppengineAppsFirewallIngressRulesPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsFirewallIngressRulesPatchRequest extends SpeakeasyBase {
    pathParams: AppengineAppsFirewallIngressRulesPatchPathParams;
    queryParams: AppengineAppsFirewallIngressRulesPatchQueryParams;
    request?: shared.FirewallRule;
    security: AppengineAppsFirewallIngressRulesPatchSecurity;
}
export declare class AppengineAppsFirewallIngressRulesPatchResponse extends SpeakeasyBase {
    contentType: string;
    firewallRule?: shared.FirewallRule;
    statusCode: number;
}
