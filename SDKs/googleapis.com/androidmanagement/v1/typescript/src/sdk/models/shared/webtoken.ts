import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum WebTokenEnabledFeaturesEnum {
    FeatureUnspecified = "FEATURE_UNSPECIFIED"
,    PlaySearch = "PLAY_SEARCH"
,    PrivateApps = "PRIVATE_APPS"
,    WebApps = "WEB_APPS"
,    StoreBuilder = "STORE_BUILDER"
,    ManagedConfigurations = "MANAGED_CONFIGURATIONS"
,    ZeroTouchCustomerManagement = "ZERO_TOUCH_CUSTOMER_MANAGEMENT"
}

export enum WebTokenPermissionsEnum {
    WebTokenPermissionUnspecified = "WEB_TOKEN_PERMISSION_UNSPECIFIED"
,    ApproveApps = "APPROVE_APPS"
}


// WebToken
/** 
 * A web token used to access the managed Google Play iframe.
**/
export class WebToken extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabledFeatures" })
  enabledFeatures?: WebTokenEnabledFeaturesEnum[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parentFrameUrl" })
  parentFrameUrl?: string;

  @Metadata({ data: "json, name=permissions" })
  permissions?: WebTokenPermissionsEnum[];

  @Metadata({ data: "json, name=value" })
  value?: string;
}
