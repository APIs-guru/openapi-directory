package shared

type AdSizeTypeEnum string

const (
	AdSizeTypeEnumTypeUnspecified AdSizeTypeEnum = "TYPE_UNSPECIFIED"
	AdSizeTypeEnumPixel           AdSizeTypeEnum = "PIXEL"
	AdSizeTypeEnumInterstitial    AdSizeTypeEnum = "INTERSTITIAL"
	AdSizeTypeEnumNative          AdSizeTypeEnum = "NATIVE"
	AdSizeTypeEnumFluid           AdSizeTypeEnum = "FLUID"
)

// AdSize
// Represents size of a single ad slot, or a creative.
type AdSize struct {
	Height *string         `json:"height,omitempty"`
	Type   *AdSizeTypeEnum `json:"type,omitempty"`
	Width  *string         `json:"width,omitempty"`
}
