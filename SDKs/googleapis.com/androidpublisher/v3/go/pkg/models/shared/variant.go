package shared

type Variant struct {
	DeviceSpec *DeviceSpec `json:"deviceSpec"`
	VariantID  *int64      `json:"variantId"`
}
