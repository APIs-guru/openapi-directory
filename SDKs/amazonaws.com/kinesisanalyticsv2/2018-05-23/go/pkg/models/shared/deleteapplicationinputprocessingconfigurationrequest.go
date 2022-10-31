package shared



type DeleteApplicationInputProcessingConfigurationRequest struct {
    ApplicationName string `json:"ApplicationName"`
    CurrentApplicationVersionID int64 `json:"CurrentApplicationVersionId"`
    InputID string `json:"InputId"`
    
}

