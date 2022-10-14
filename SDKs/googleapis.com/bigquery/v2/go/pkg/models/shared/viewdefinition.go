package shared

type ViewDefinition struct {
	Query                        *string                       `json:"query,omitempty"`
	UseExplicitColumnNames       *bool                         `json:"useExplicitColumnNames,omitempty"`
	UseLegacySQL                 *bool                         `json:"useLegacySql,omitempty"`
	UserDefinedFunctionResources []UserDefinedFunctionResource `json:"userDefinedFunctionResources,omitempty"`
}
