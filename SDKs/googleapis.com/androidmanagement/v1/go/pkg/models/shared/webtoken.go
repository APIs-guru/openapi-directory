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

// WebToken
// A web token used to access the managed Google Play iframe.
type WebToken struct {
	EnabledFeatures []WebTokenEnabledFeaturesEnum `json:"enabledFeatures,omitempty"`
	Name            *string                       `json:"name,omitempty"`
	ParentFrameURL  *string                       `json:"parentFrameUrl,omitempty"`
	Permissions     []WebTokenPermissionsEnum     `json:"permissions,omitempty"`
	Value           *string                       `json:"value,omitempty"`
}
