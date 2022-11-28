package shared

// GoogleCloudApigeeV1RateRange
// API call volume range and the fees charged when the total number of API calls is within the range.
type GoogleCloudApigeeV1RateRange struct {
	End   *string          `json:"end,omitempty"`
	Fee   *GoogleTypeMoney `json:"fee,omitempty"`
	Start *string          `json:"start,omitempty"`
}
