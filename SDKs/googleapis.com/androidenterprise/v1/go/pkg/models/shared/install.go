package shared

type InstallInstallStateEnum string

const (
	InstallInstallStateEnumInstalled      InstallInstallStateEnum = "installed"
	InstallInstallStateEnumInstallPending InstallInstallStateEnum = "installPending"
)

type Install struct {
	InstallState *InstallInstallStateEnum `json:"installState,omitempty"`
	ProductID    *string                  `json:"productId,omitempty"`
	VersionCode  *int32                   `json:"versionCode,omitempty"`
}
