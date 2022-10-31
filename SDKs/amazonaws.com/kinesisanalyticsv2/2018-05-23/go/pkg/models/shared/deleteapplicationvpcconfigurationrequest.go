package shared



type DeleteApplicationVpcConfigurationRequest struct {
    ApplicationName string `json:"ApplicationName"`
    ConditionalToken *string `json:"ConditionalToken,omitempty"`
    CurrentApplicationVersionID *int64 `json:"CurrentApplicationVersionId,omitempty"`
    VpcConfigurationID string `json:"VpcConfigurationId"`
    
}

