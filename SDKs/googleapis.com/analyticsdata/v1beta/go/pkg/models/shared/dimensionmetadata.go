package shared



type DimensionMetadata struct {
    APIName *string `json:"apiName,omitempty"`
    Category *string `json:"category,omitempty"`
    CustomDefinition *bool `json:"customDefinition,omitempty"`
    DeprecatedAPINames []string `json:"deprecatedApiNames,omitempty"`
    Description *string `json:"description,omitempty"`
    UIName *string `json:"uiName,omitempty"`
    
}

