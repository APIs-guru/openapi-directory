package shared

type AdSizeSizeTypeEnum string

const (
	AdSizeSizeTypeEnumSizeTypeUnspecified AdSizeSizeTypeEnum = "SIZE_TYPE_UNSPECIFIED"
	AdSizeSizeTypeEnumPixel               AdSizeSizeTypeEnum = "PIXEL"
	AdSizeSizeTypeEnumInterstitial        AdSizeSizeTypeEnum = "INTERSTITIAL"
	AdSizeSizeTypeEnumNative              AdSizeSizeTypeEnum = "NATIVE"
	AdSizeSizeTypeEnumFluid               AdSizeSizeTypeEnum = "FLUID"
)

type AdSize struct {
	Height   *string             `json:"height"`
	SizeType *AdSizeSizeTypeEnum `json:"sizeType"`
	Width    *string             `json:"width"`
}
