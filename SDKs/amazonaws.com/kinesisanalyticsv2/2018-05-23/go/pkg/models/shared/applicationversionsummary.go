package shared



type ApplicationVersionSummary struct {
    ApplicationStatus ApplicationStatusEnum `json:"ApplicationStatus"`
    ApplicationVersionID int64 `json:"ApplicationVersionId"`
    
}

