package shared

type DeviceMetadata struct {
	CPUMake          *string
	CPUModel         *string
	DeviceClass      *string
	GlEsVersion      *int32
	Manufacturer     *string
	NativePlatform   *string
	ProductName      *string
	RAMMb            *int32
	ScreenDensityDpi *int32
	ScreenHeightPx   *int32
	ScreenWidthPx    *int32
}
