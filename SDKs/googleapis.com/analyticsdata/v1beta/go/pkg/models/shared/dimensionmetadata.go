package shared

type DimensionMetadata struct {
	APIName            *string  `json:"apiName"`
	Category           *string  `json:"category"`
	CustomDefinition   *bool    `json:"customDefinition"`
	DeprecatedAPINames []string `json:"deprecatedApiNames"`
	Description        *string  `json:"description"`
	UIName             *string  `json:"uiName"`
}
