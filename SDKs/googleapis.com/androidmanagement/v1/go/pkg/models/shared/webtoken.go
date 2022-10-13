package shared

type WebTokenEnabledFeaturesEnum string

const (
	WebTokenEnabledFeaturesEnumFeatureUnspecified          WebTokenEnabledFeaturesEnum = "FEATURE_UNSPECIFIED"
	WebTokenEnabledFeaturesEnumPlaySearch                  WebTokenEnabledFeaturesEnum = "PLAY_SEARCH"
	WebTokenEnabledFeaturesEnumPrivateApps                 WebTokenEnabledFeaturesEnum = "PRIVATE_APPS"
	WebTokenEnabledFeaturesEnumWebApps                     WebTokenEnabledFeaturesEnum = "WEB_APPS"
	WebTokenEnabledFeaturesEnumStoreBuilder                WebTokenEnabledFeaturesEnum = "STORE_BUILDER"
	WebTokenEnabledFeaturesEnumManagedConfigurations       WebTokenEnabledFeaturesEnum = "MANAGED_CONFIGURATIONS"
	WebTokenEnabledFeaturesEnumZeroTouchCustomerManagement WebTokenEnabledFeaturesEnum = "ZERO_TOUCH_CUSTOMER_MANAGEMENT"
)

type WebTokenPermissionsEnum string

const (
	WebTokenPermissionsEnumWebTokenPermissionUnspecified WebTokenPermissionsEnum = "WEB_TOKEN_PERMISSION_UNSPECIFIED"
	WebTokenPermissionsEnumApproveApps                   WebTokenPermissionsEnum = "APPROVE_APPS"
)

type WebToken struct {
	EnabledFeatures []WebTokenEnabledFeaturesEnum `json:"enabledFeatures"`
	Name            *string                       `json:"name"`
	ParentFrameURL  *string                       `json:"parentFrameUrl"`
	Permissions     []WebTokenPermissionsEnum     `json:"permissions"`
	Value           *string                       `json:"value"`
}
