package shared



type EnvironmentAccessModel struct {
    EnvironmentAccessType *EnvironmentAccessTypeEnum `json:"environmentAccessType,omitempty"`
    EnvironmentID *string `json:"environmentId,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

