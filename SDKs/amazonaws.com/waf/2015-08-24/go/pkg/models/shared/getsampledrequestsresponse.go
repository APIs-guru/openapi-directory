package shared

type GetSampledRequestsResponse struct {
	PopulationSize  *int64               `json:"PopulationSize,omitempty"`
	SampledRequests []SampledHTTPRequest `json:"SampledRequests,omitempty"`
	TimeWindow      *TimeWindow          `json:"TimeWindow,omitempty"`
}
