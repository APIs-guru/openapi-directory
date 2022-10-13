package shared

type GetAPIResourceCoverageResponse struct {
	Data       APIResourceCoverage `json:"data"`
	Links      *Links              `json:"links"`
	Meta       *Meta               `json:"meta"`
	Status     string              `json:"status"`
	StatusCode int64               `json:"status_code"`
}
