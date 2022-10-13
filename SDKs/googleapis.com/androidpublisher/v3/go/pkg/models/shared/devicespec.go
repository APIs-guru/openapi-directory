package shared

type DeviceSpec struct {
	ScreenDensity    *int64   `json:"screenDensity"`
	SupportedAbis    []string `json:"supportedAbis"`
	SupportedLocales []string `json:"supportedLocales"`
}
