package shared

// ModelPackageStatusDetails
// Specifies the validation and image scan statuses of the model package.
type ModelPackageStatusDetails struct {
	ImageScanStatuses  []ModelPackageStatusItem `json:"ImageScanStatuses,omitempty"`
	ValidationStatuses []ModelPackageStatusItem `json:"ValidationStatuses"`
}
