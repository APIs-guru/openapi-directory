package shared

type DeviceSpec struct {
	ScreenDensity    *int64   `json:"screenDensity,omitempty"`
	SupportedAbis    []string `json:"supportedAbis,omitempty"`
	SupportedLocales []string `json:"supportedLocales,omitempty"`
}
