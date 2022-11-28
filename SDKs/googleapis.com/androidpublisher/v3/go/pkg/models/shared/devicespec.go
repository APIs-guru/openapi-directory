package shared

// DeviceSpec
// The device spec used to generate a system APK.
type DeviceSpec struct {
	ScreenDensity    *int64   `json:"screenDensity,omitempty"`
	SupportedAbis    []string `json:"supportedAbis,omitempty"`
	SupportedLocales []string `json:"supportedLocales,omitempty"`
}
