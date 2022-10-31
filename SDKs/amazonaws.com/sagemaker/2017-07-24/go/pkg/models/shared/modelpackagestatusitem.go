package shared



type ModelPackageStatusItem struct {
    FailureReason *string `json:"FailureReason,omitempty"`
    Name string `json:"Name"`
    Status DetailedModelPackageStatusEnum `json:"Status"`
    
}

