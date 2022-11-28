package shared

// GoogleCloudApigeeV1ListRatePlansResponse
// Response for ListRatePlans.
type GoogleCloudApigeeV1ListRatePlansResponse struct {
	NextStartKey *string                       `json:"nextStartKey,omitempty"`
	RatePlans    []GoogleCloudApigeeV1RatePlan `json:"ratePlans,omitempty"`
}
