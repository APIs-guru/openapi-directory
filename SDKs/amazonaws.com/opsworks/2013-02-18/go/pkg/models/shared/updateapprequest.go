package shared



type UpdateAppRequest struct {
    AppID string `json:"AppId"`
    AppSource *Source `json:"AppSource,omitempty"`
    Attributes map[string]string `json:"Attributes,omitempty"`
    DataSources []DataSource `json:"DataSources,omitempty"`
    Description *string `json:"Description,omitempty"`
    Domains []string `json:"Domains,omitempty"`
    EnableSsl *bool `json:"EnableSsl,omitempty"`
    Environment []EnvironmentVariable `json:"Environment,omitempty"`
    Name *string `json:"Name,omitempty"`
    SslConfiguration *SslConfiguration `json:"SslConfiguration,omitempty"`
    Type *AppTypeEnum `json:"Type,omitempty"`
    
}

