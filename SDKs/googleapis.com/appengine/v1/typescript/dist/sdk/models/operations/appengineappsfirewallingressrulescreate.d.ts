import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AppengineAppsFirewallIngressRulesCreatePathParams extends SpeakeasyBase {
    appsId: string;
}
export declare class AppengineAppsFirewallIngressRulesCreateQueryParams extends SpeakeasyBase {
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
export declare class AppengineAppsFirewallIngressRulesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsFirewallIngressRulesCreateRequest extends SpeakeasyBase {
    pathParams: AppengineAppsFirewallIngressRulesCreatePathParams;
    queryParams: AppengineAppsFirewallIngressRulesCreateQueryParams;
    request?: shared.FirewallRule;
    security: AppengineAppsFirewallIngressRulesCreateSecurity;
}
export declare class AppengineAppsFirewallIngressRulesCreateResponse extends SpeakeasyBase {
    contentType: string;
    firewallRule?: shared.FirewallRule;
    statusCode: number;
}
