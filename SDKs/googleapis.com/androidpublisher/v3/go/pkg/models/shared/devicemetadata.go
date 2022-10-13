package shared

type DeviceMetadata struct {
	CPUMake          *string `json:"cpuMake"`
	CPUModel         *string `json:"cpuModel"`
	DeviceClass      *string `json:"deviceClass"`
	GlEsVersion      *int32  `json:"glEsVersion"`
	Manufacturer     *string `json:"manufacturer"`
	NativePlatform   *string `json:"nativePlatform"`
	ProductName      *string `json:"productName"`
	RAMMb            *int32  `json:"ramMb"`
	ScreenDensityDpi *int32  `json:"screenDensityDpi"`
	ScreenHeightPx   *int32  `json:"screenHeightPx"`
	ScreenWidthPx    *int32  `json:"screenWidthPx"`
}
