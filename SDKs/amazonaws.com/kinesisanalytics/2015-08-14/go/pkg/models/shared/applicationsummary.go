package shared



type ApplicationSummary struct {
    ApplicationArn string `json:"ApplicationARN"`
    ApplicationName string `json:"ApplicationName"`
    ApplicationStatus ApplicationStatusEnum `json:"ApplicationStatus"`
    
}

