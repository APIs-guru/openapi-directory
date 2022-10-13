package shared

type ModelPackageStatusDetails struct {
	ImageScanStatuses  []ModelPackageStatusItem `json:"ImageScanStatuses"`
	ValidationStatuses []ModelPackageStatusItem `json:"ValidationStatuses"`
}
