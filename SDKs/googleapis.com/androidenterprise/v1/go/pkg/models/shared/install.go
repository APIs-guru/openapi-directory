package shared

type InstallInstallStateEnum string

const (
	InstallInstallStateEnumInstalled      InstallInstallStateEnum = "installed"
	InstallInstallStateEnumInstallPending InstallInstallStateEnum = "installPending"
)

// Install
// The existence of an Installs resource indicates that an app is installed on a particular device (or that an install is pending). The API can be used to create an install resource using the update method. This triggers the actual install of the app on the device. If the user does not already have an entitlement for the app, then an attempt is made to create one. If this fails (for example, because the app is not free and there is no available license), then the creation of the install fails. The API can also be used to update an installed app. If the update method is used on an existing install, then the app will be updated to the latest available version. Note that it is not possible to force the installation of a specific version of an app: the version code is read-only. If a user installs an app themselves (as permitted by the enterprise), then again an install resource and possibly an entitlement resource are automatically created. The API can also be used to delete an install resource, which triggers the removal of the app from the device. Note that deleting an install does not automatically remove the corresponding entitlement, even if there are no remaining installs. The install resource will also be deleted if the user uninstalls the app themselves.
type Install struct {
	InstallState *InstallInstallStateEnum `json:"installState,omitempty"`
	ProductID    *string                  `json:"productId,omitempty"`
	VersionCode  *int32                   `json:"versionCode,omitempty"`
}
