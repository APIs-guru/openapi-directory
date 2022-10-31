package shared

type AffiliateVideoUrls struct {
	LargeMotion *string `json:"large_motion,omitempty"`
	LargeStill  *string `json:"large_still,omitempty"`
	MediumStill *string `json:"medium_still,omitempty"`
	SmallMotion *string `json:"small_motion,omitempty"`
	SmallStill  *string `json:"small_still,omitempty"`
}
