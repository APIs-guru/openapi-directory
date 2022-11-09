import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AppengineAppsFirewallIngressRulesBatchUpdatePathParams extends SpeakeasyBase {
    appsId: string;
}
export declare class AppengineAppsFirewallIngressRulesBatchUpdateQueryParams extends SpeakeasyBase {
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
export declare class AppengineAppsFirewallIngressRulesBatchUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsFirewallIngressRulesBatchUpdateRequest extends SpeakeasyBase {
    pathParams: AppengineAppsFirewallIngressRulesBatchUpdatePathParams;
    queryParams: AppengineAppsFirewallIngressRulesBatchUpdateQueryParams;
    request?: shared.BatchUpdateIngressRulesRequest;
    security: AppengineAppsFirewallIngressRulesBatchUpdateSecurity;
}
export declare class AppengineAppsFirewallIngressRulesBatchUpdateResponse extends SpeakeasyBase {
    batchUpdateIngressRulesResponse?: shared.BatchUpdateIngressRulesResponse;
    contentType: string;
    statusCode: number;
}
