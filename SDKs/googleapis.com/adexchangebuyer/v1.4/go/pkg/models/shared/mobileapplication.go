package shared

type MobileApplication struct {
	AppStore      *string `json:"appStore,omitempty"`
	ExternalAppID *string `json:"externalAppId,omitempty"`
}
