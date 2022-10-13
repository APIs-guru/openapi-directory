package shared

type AdministratorWebTokenSpecPermissionEnum string

const (
	AdministratorWebTokenSpecPermissionEnumUnknown     AdministratorWebTokenSpecPermissionEnum = "unknown"
	AdministratorWebTokenSpecPermissionEnumApproveApps AdministratorWebTokenSpecPermissionEnum = "approveApps"
	AdministratorWebTokenSpecPermissionEnumManageMcm   AdministratorWebTokenSpecPermissionEnum = "manageMcm"
)

type AdministratorWebTokenSpec struct {
	ManagedConfigurations *AdministratorWebTokenSpecManagedConfigurations `json:"managedConfigurations"`
	Parent                *string                                         `json:"parent"`
	Permission            []AdministratorWebTokenSpecPermissionEnum       `json:"permission"`
	PlaySearch            *AdministratorWebTokenSpecPlaySearch            `json:"playSearch"`
	PrivateApps           *AdministratorWebTokenSpecPrivateApps           `json:"privateApps"`
	StoreBuilder          *AdministratorWebTokenSpecStoreBuilder          `json:"storeBuilder"`
	WebApps               *AdministratorWebTokenSpecWebApps               `json:"webApps"`
	ZeroTouch             *AdministratorWebTokenSpecZeroTouch             `json:"zeroTouch"`
}
