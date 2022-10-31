package shared



type ModelPackageStatusDetails struct {
    ImageScanStatuses []ModelPackageStatusItem `json:"ImageScanStatuses,omitempty"`
    ValidationStatuses []ModelPackageStatusItem `json:"ValidationStatuses"`
    
}

