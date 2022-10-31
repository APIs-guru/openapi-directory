package shared

type AdSizeTypeEnum string

const (
	AdSizeTypeEnumTypeUnspecified AdSizeTypeEnum = "TYPE_UNSPECIFIED"
	AdSizeTypeEnumPixel           AdSizeTypeEnum = "PIXEL"
	AdSizeTypeEnumInterstitial    AdSizeTypeEnum = "INTERSTITIAL"
	AdSizeTypeEnumNative          AdSizeTypeEnum = "NATIVE"
	AdSizeTypeEnumFluid           AdSizeTypeEnum = "FLUID"
)

type AdSize struct {
	Height *string         `json:"height,omitempty"`
	Type   *AdSizeTypeEnum `json:"type,omitempty"`
	Width  *string         `json:"width,omitempty"`
}
