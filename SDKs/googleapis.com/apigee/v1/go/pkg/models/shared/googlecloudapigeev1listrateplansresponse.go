package shared

type GoogleCloudApigeeV1ListRatePlansResponse struct {
	NextStartKey *string                       `json:"nextStartKey"`
	RatePlans    []GoogleCloudApigeeV1RatePlan `json:"ratePlans"`
}
