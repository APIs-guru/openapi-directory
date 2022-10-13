package shared

type AffiliateVideoUrls struct {
	LargeMotion *string `json:"large_motion"`
	LargeStill  *string `json:"large_still"`
	MediumStill *string `json:"medium_still"`
	SmallMotion *string `json:"small_motion"`
	SmallStill  *string `json:"small_still"`
}
