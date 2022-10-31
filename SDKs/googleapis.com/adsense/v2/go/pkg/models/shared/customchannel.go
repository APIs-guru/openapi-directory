package shared



type CustomChannel struct {
    Active *bool `json:"active,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    Name *string `json:"name,omitempty"`
    ReportingDimensionID *string `json:"reportingDimensionId,omitempty"`
    
}

