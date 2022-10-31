package shared




type AdministratorWebTokenSpecPermissionEnum string

const (
    AdministratorWebTokenSpecPermissionEnumUnknown AdministratorWebTokenSpecPermissionEnum = "unknown"
AdministratorWebTokenSpecPermissionEnumApproveApps AdministratorWebTokenSpecPermissionEnum = "approveApps"
AdministratorWebTokenSpecPermissionEnumManageMcm AdministratorWebTokenSpecPermissionEnum = "manageMcm"
)


type AdministratorWebTokenSpec struct {
    ManagedConfigurations *AdministratorWebTokenSpecManagedConfigurations `json:"managedConfigurations,omitempty"`
    Parent *string `json:"parent,omitempty"`
    Permission []AdministratorWebTokenSpecPermissionEnum `json:"permission,omitempty"`
    PlaySearch *AdministratorWebTokenSpecPlaySearch `json:"playSearch,omitempty"`
    PrivateApps *AdministratorWebTokenSpecPrivateApps `json:"privateApps,omitempty"`
    StoreBuilder *AdministratorWebTokenSpecStoreBuilder `json:"storeBuilder,omitempty"`
    WebApps *AdministratorWebTokenSpecWebApps `json:"webApps,omitempty"`
    ZeroTouch *AdministratorWebTokenSpecZeroTouch `json:"zeroTouch,omitempty"`
    
}

