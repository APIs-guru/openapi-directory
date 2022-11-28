package shared

type AdministratorWebTokenSpecPermissionEnum string

const (
	AdministratorWebTokenSpecPermissionEnumUnknown     AdministratorWebTokenSpecPermissionEnum = "unknown"
	AdministratorWebTokenSpecPermissionEnumApproveApps AdministratorWebTokenSpecPermissionEnum = "approveApps"
	AdministratorWebTokenSpecPermissionEnumManageMcm   AdministratorWebTokenSpecPermissionEnum = "manageMcm"
)

// AdministratorWebTokenSpec
// Specification for a token used to generate iframes. The token specifies what data the admin is allowed to modify and the URI the iframe is allowed to communiate with.
type AdministratorWebTokenSpec struct {
	ManagedConfigurations *AdministratorWebTokenSpecManagedConfigurations `json:"managedConfigurations,omitempty"`
	Parent                *string                                         `json:"parent,omitempty"`
	Permission            []AdministratorWebTokenSpecPermissionEnum       `json:"permission,omitempty"`
	PlaySearch            *AdministratorWebTokenSpecPlaySearch            `json:"playSearch,omitempty"`
	PrivateApps           *AdministratorWebTokenSpecPrivateApps           `json:"privateApps,omitempty"`
	StoreBuilder          *AdministratorWebTokenSpecStoreBuilder          `json:"storeBuilder,omitempty"`
	WebApps               *AdministratorWebTokenSpecWebApps               `json:"webApps,omitempty"`
	ZeroTouch             *AdministratorWebTokenSpecZeroTouch             `json:"zeroTouch,omitempty"`
}
