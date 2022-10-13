package shared

type GetSampledRequestsResponse struct {
	PopulationSize  *int64               `json:"PopulationSize"`
	SampledRequests []SampledHTTPRequest `json:"SampledRequests"`
	TimeWindow      *TimeWindow          `json:"TimeWindow"`
}
