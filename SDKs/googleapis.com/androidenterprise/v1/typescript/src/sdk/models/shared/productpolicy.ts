import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AutoInstallPolicy } from "./autoinstallpolicy";
import { EnterpriseAuthenticationAppLinkConfig } from "./enterpriseauthenticationapplinkconfig";
import { ManagedConfiguration } from "./managedconfiguration";

export enum ProductPolicyAutoUpdateModeEnum {
    AutoUpdateModeUnspecified = "autoUpdateModeUnspecified"
,    AutoUpdateDefault = "autoUpdateDefault"
,    AutoUpdatePostponed = "autoUpdatePostponed"
,    AutoUpdateHighPriority = "autoUpdateHighPriority"
}

export enum ProductPolicyTracksEnum {
    AppTrackUnspecified = "appTrackUnspecified"
,    Production = "production"
,    Beta = "beta"
,    Alpha = "alpha"
}


// ProductPolicy
/** 
 * The policy for a product.
**/
export class ProductPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=autoInstallPolicy" })
  autoInstallPolicy?: AutoInstallPolicy;

  @Metadata({ data: "json, name=autoUpdateMode" })
  autoUpdateMode?: ProductPolicyAutoUpdateModeEnum;

  @Metadata({ data: "json, name=enterpriseAuthenticationAppLinkConfigs", elemType: shared.EnterpriseAuthenticationAppLinkConfig })
  enterpriseAuthenticationAppLinkConfigs?: EnterpriseAuthenticationAppLinkConfig[];

  @Metadata({ data: "json, name=managedConfiguration" })
  managedConfiguration?: ManagedConfiguration;

  @Metadata({ data: "json, name=productId" })
  productId?: string;

  @Metadata({ data: "json, name=trackIds" })
  trackIds?: string[];

  @Metadata({ data: "json, name=tracks" })
  tracks?: ProductPolicyTracksEnum[];
}
