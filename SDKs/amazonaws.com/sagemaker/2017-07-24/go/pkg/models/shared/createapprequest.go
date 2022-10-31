package shared



type CreateAppRequest struct {
    AppName string `json:"AppName"`
    AppType AppTypeEnum `json:"AppType"`
    DomainID string `json:"DomainId"`
    ResourceSpec *ResourceSpec `json:"ResourceSpec,omitempty"`
    Tags []Tag `json:"Tags,omitempty"`
    UserProfileName string `json:"UserProfileName"`
    
}

