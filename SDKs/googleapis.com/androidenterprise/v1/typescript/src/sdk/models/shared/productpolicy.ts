import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoInstallPolicy } from "./autoinstallpolicy";
import { EnterpriseAuthenticationAppLinkConfig } from "./enterpriseauthenticationapplinkconfig";
import { ManagedConfiguration } from "./managedconfiguration";


export enum ProductPolicyAutoUpdateModeEnum {
    AutoUpdateModeUnspecified = "autoUpdateModeUnspecified",
    AutoUpdateDefault = "autoUpdateDefault",
    AutoUpdatePostponed = "autoUpdatePostponed",
    AutoUpdateHighPriority = "autoUpdateHighPriority"
}

export enum ProductPolicyTracksEnum {
    AppTrackUnspecified = "appTrackUnspecified",
    Production = "production",
    Beta = "beta",
    Alpha = "alpha"
}


// ProductPolicy
/** 
 * The policy for a product.
**/
export class ProductPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoInstallPolicy" })
  autoInstallPolicy?: AutoInstallPolicy;

  @SpeakeasyMetadata({ data: "json, name=autoUpdateMode" })
  autoUpdateMode?: ProductPolicyAutoUpdateModeEnum;

  @SpeakeasyMetadata({ data: "json, name=enterpriseAuthenticationAppLinkConfigs", elemType: EnterpriseAuthenticationAppLinkConfig })
  enterpriseAuthenticationAppLinkConfigs?: EnterpriseAuthenticationAppLinkConfig[];

  @SpeakeasyMetadata({ data: "json, name=managedConfiguration" })
  managedConfiguration?: ManagedConfiguration;

  @SpeakeasyMetadata({ data: "json, name=productId" })
  productId?: string;

  @SpeakeasyMetadata({ data: "json, name=trackIds" })
  trackIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=tracks" })
  tracks?: ProductPolicyTracksEnum[];
}
