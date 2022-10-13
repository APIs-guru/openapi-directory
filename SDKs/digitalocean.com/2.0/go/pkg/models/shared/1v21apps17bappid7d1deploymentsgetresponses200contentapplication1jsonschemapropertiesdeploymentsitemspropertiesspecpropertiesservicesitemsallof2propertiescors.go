package shared

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesServicesItemsAllOf2PropertiesCorsAllowOrigins struct {
	Exact  *string `json:"exact"`
	Prefix *string `json:"prefix"`
	Regex  *string `json:"regex"`
}

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesServicesItemsAllOf2PropertiesCors struct {
	AllowCredentials *bool                                                                                                                                                                                       `json:"allow_credentials"`
	AllowHeaders     []string                                                                                                                                                                                    `json:"allow_headers"`
	AllowMethods     []string                                                                                                                                                                                    `json:"allow_methods"`
	AllowOrigins     []Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesServicesItemsAllOf2PropertiesCorsAllowOrigins `json:"allow_origins"`
	ExposeHeaders    []string                                                                                                                                                                                    `json:"expose_headers"`
	MaxAge           *string                                                                                                                                                                                     `json:"max_age"`
}
