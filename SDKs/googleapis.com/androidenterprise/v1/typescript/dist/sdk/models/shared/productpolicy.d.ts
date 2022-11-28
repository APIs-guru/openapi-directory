import { SpeakeasyBase } from "../../../internal/utils";
import { AutoInstallPolicy } from "./autoinstallpolicy";
import { EnterpriseAuthenticationAppLinkConfig } from "./enterpriseauthenticationapplinkconfig";
import { ManagedConfiguration } from "./managedconfiguration";
export declare enum ProductPolicyAutoUpdateModeEnum {
    AutoUpdateModeUnspecified = "autoUpdateModeUnspecified",
    AutoUpdateDefault = "autoUpdateDefault",
    AutoUpdatePostponed = "autoUpdatePostponed",
    AutoUpdateHighPriority = "autoUpdateHighPriority"
}
export declare enum ProductPolicyTracksEnum {
    AppTrackUnspecified = "appTrackUnspecified",
    Production = "production",
    Beta = "beta",
    Alpha = "alpha"
}
/**
 * The policy for a product.
**/
export declare class ProductPolicy extends SpeakeasyBase {
    autoInstallPolicy?: AutoInstallPolicy;
    autoUpdateMode?: ProductPolicyAutoUpdateModeEnum;
    enterpriseAuthenticationAppLinkConfigs?: EnterpriseAuthenticationAppLinkConfig[];
    managedConfiguration?: ManagedConfiguration;
    productId?: string;
    trackIds?: string[];
    tracks?: ProductPolicyTracksEnum[];
}
