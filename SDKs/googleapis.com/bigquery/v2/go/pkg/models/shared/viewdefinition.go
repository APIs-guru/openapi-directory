package shared

type ViewDefinition struct {
	Query                        *string                       `json:"query"`
	UseExplicitColumnNames       *bool                         `json:"useExplicitColumnNames"`
	UseLegacySQL                 *bool                         `json:"useLegacySql"`
	UserDefinedFunctionResources []UserDefinedFunctionResource `json:"userDefinedFunctionResources"`
}
