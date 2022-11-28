import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppengineAppsFirewallIngressRulesDeletePathParams extends SpeakeasyBase {
    appsId: string;
    ingressRulesId: string;
}
export declare class AppengineAppsFirewallIngressRulesDeleteQueryParams extends SpeakeasyBase {
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
export declare class AppengineAppsFirewallIngressRulesDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsFirewallIngressRulesDeleteRequest extends SpeakeasyBase {
    pathParams: AppengineAppsFirewallIngressRulesDeletePathParams;
    queryParams: AppengineAppsFirewallIngressRulesDeleteQueryParams;
    security: AppengineAppsFirewallIngressRulesDeleteSecurity;
}
export declare class AppengineAppsFirewallIngressRulesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
