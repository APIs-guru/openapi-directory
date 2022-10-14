package shared

type AlgorithmStatusDetails struct {
	ImageScanStatuses  []AlgorithmStatusItem `json:"ImageScanStatuses,omitempty"`
	ValidationStatuses []AlgorithmStatusItem `json:"ValidationStatuses,omitempty"`
}
