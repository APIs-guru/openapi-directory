import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum WebTokenEnabledFeaturesEnum {
    FeatureUnspecified = "FEATURE_UNSPECIFIED",
    PlaySearch = "PLAY_SEARCH",
    PrivateApps = "PRIVATE_APPS",
    WebApps = "WEB_APPS",
    StoreBuilder = "STORE_BUILDER",
    ManagedConfigurations = "MANAGED_CONFIGURATIONS",
    ZeroTouchCustomerManagement = "ZERO_TOUCH_CUSTOMER_MANAGEMENT"
}

export enum WebTokenPermissionsEnum {
    WebTokenPermissionUnspecified = "WEB_TOKEN_PERMISSION_UNSPECIFIED",
    ApproveApps = "APPROVE_APPS"
}


// WebToken
/** 
 * A web token used to access the managed Google Play iframe.
**/
export class WebToken extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabledFeatures" })
  enabledFeatures?: WebTokenEnabledFeaturesEnum[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parentFrameUrl" })
  parentFrameUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: WebTokenPermissionsEnum[];

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
