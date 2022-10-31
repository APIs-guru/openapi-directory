package shared

type AffiliateImageUrls struct {
	Large        *string `json:"large,omitempty"`
	LargeHeight  *int32  `json:"large_height,omitempty"`
	LargeWidth   *int32  `json:"large_width,omitempty"`
	Medium       *string `json:"medium,omitempty"`
	MediumHeight *int32  `json:"medium_height,omitempty"`
	MediumWidth  *int32  `json:"medium_width,omitempty"`
	Small        *string `json:"small,omitempty"`
	SmallHeight  *int32  `json:"small_height,omitempty"`
	SmallWidth   *int32  `json:"small_width,omitempty"`
}
