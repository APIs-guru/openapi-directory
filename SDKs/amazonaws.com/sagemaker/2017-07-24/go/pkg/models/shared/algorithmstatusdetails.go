package shared

// AlgorithmStatusDetails
// Specifies the validation and image scan statuses of the algorithm.
type AlgorithmStatusDetails struct {
	ImageScanStatuses  []AlgorithmStatusItem `json:"ImageScanStatuses,omitempty"`
	ValidationStatuses []AlgorithmStatusItem `json:"ValidationStatuses,omitempty"`
}
