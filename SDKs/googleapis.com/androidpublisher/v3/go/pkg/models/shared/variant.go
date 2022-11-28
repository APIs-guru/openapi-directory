package shared

// Variant
// APK that is suitable for inclusion in a system image. The resource of SystemApksService.
type Variant struct {
	DeviceSpec *DeviceSpec `json:"deviceSpec,omitempty"`
	VariantID  *int64      `json:"variantId,omitempty"`
}

// VariantInput
// APK that is suitable for inclusion in a system image. The resource of SystemApksService.
type VariantInput struct {
	DeviceSpec *DeviceSpec `json:"deviceSpec,omitempty"`
}
