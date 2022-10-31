package shared



type AddApplicationVpcConfigurationRequest struct {
    ApplicationName string `json:"ApplicationName"`
    ConditionalToken *string `json:"ConditionalToken,omitempty"`
    CurrentApplicationVersionID *int64 `json:"CurrentApplicationVersionId,omitempty"`
    VpcConfiguration VpcConfiguration `json:"VpcConfiguration"`
    
}

