package shared

type App struct {
	AppID         *string           `json:"appId,omitempty"`
	LinkedAppInfo *AppLinkedAppInfo `json:"linkedAppInfo,omitempty"`
	ManualAppInfo *AppManualAppInfo `json:"manualAppInfo,omitempty"`
	Name          *string           `json:"name,omitempty"`
	Platform      *string           `json:"platform,omitempty"`
}
