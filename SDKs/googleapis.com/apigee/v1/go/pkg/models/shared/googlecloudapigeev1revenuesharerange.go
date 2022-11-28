package shared

// GoogleCloudApigeeV1RevenueShareRange
// API call volume range and the percentage of revenue to share with the developer when the total number of API calls is within the range.
type GoogleCloudApigeeV1RevenueShareRange struct {
	End             *string  `json:"end,omitempty"`
	SharePercentage *float64 `json:"sharePercentage,omitempty"`
	Start           *string  `json:"start,omitempty"`
}
