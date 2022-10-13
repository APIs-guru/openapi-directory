package shared

type App struct {
	AppID         *string           `json:"appId"`
	LinkedAppInfo *AppLinkedAppInfo `json:"linkedAppInfo"`
	ManualAppInfo *AppManualAppInfo `json:"manualAppInfo"`
	Name          *string           `json:"name"`
	Platform      *string           `json:"platform"`
}
