package shared

// DataQualityJobInput
// The input for the data quality monitoring job. Currently endpoints are supported for input.
type DataQualityJobInput struct {
	EndpointInput EndpointInput `json:"EndpointInput"`
}
