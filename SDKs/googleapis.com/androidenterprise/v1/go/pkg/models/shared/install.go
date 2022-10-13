package shared

type InstallInstallStateEnum string

const (
	InstallInstallStateEnumInstalled      InstallInstallStateEnum = "installed"
	InstallInstallStateEnumInstallPending InstallInstallStateEnum = "installPending"
)

type Install struct {
	InstallState *InstallInstallStateEnum `json:"installState"`
	ProductID    *string                  `json:"productId"`
	VersionCode  *int32                   `json:"versionCode"`
}
