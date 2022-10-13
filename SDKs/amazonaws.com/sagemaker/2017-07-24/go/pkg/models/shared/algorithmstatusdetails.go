package shared

type AlgorithmStatusDetails struct {
	ImageScanStatuses  []AlgorithmStatusItem `json:"ImageScanStatuses"`
	ValidationStatuses []AlgorithmStatusItem `json:"ValidationStatuses"`
}
