import { SpeakeasyBase } from "../../../internal/utils";
export declare enum WebTokenEnabledFeaturesEnum {
    FeatureUnspecified = "FEATURE_UNSPECIFIED",
    PlaySearch = "PLAY_SEARCH",
    PrivateApps = "PRIVATE_APPS",
    WebApps = "WEB_APPS",
    StoreBuilder = "STORE_BUILDER",
    ManagedConfigurations = "MANAGED_CONFIGURATIONS",
    ZeroTouchCustomerManagement = "ZERO_TOUCH_CUSTOMER_MANAGEMENT"
}
export declare enum WebTokenPermissionsEnum {
    WebTokenPermissionUnspecified = "WEB_TOKEN_PERMISSION_UNSPECIFIED",
    ApproveApps = "APPROVE_APPS"
}
/**
 * A web token used to access the managed Google Play iframe.
**/
export declare class WebToken extends SpeakeasyBase {
    enabledFeatures?: WebTokenEnabledFeaturesEnum[];
    name?: string;
    parentFrameUrl?: string;
    permissions?: WebTokenPermissionsEnum[];
    value?: string;
}
