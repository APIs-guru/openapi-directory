package shared

// DeviceMetadata
// Characteristics of the user's device.
type DeviceMetadata struct {
	CPUMake          *string `json:"cpuMake,omitempty"`
	CPUModel         *string `json:"cpuModel,omitempty"`
	DeviceClass      *string `json:"deviceClass,omitempty"`
	GlEsVersion      *int32  `json:"glEsVersion,omitempty"`
	Manufacturer     *string `json:"manufacturer,omitempty"`
	NativePlatform   *string `json:"nativePlatform,omitempty"`
	ProductName      *string `json:"productName,omitempty"`
	RAMMb            *int32  `json:"ramMb,omitempty"`
	ScreenDensityDpi *int32  `json:"screenDensityDpi,omitempty"`
	ScreenHeightPx   *int32  `json:"screenHeightPx,omitempty"`
	ScreenWidthPx    *int32  `json:"screenWidthPx,omitempty"`
}
