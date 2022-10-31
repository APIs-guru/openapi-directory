package shared



type ListBuiltInSlotTypesResponse struct {
    BuiltInSlotTypeSummaries []BuiltInSlotTypeSummary `json:"builtInSlotTypeSummaries,omitempty"`
    LocaleID *string `json:"localeId,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

