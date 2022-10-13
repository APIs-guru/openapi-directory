package shared

type AffiliateImageUrls struct {
	Large        *string `json:"large"`
	LargeHeight  *int32  `json:"large_height"`
	LargeWidth   *int32  `json:"large_width"`
	Medium       *string `json:"medium"`
	MediumHeight *int32  `json:"medium_height"`
	MediumWidth  *int32  `json:"medium_width"`
	Small        *string `json:"small"`
	SmallHeight  *int32  `json:"small_height"`
	SmallWidth   *int32  `json:"small_width"`
}
