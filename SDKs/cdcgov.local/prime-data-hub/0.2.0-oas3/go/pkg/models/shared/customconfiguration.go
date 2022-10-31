package shared




type CustomConfigurationFormatEnum string

const (
    CustomConfigurationFormatEnumCsv CustomConfigurationFormatEnum = "CSV"
CustomConfigurationFormatEnumHl7 CustomConfigurationFormatEnum = "HL7"
)


type CustomConfiguration struct {
    Format CustomConfigurationFormatEnum `json:"format"`
    NameFormat *string `json:"nameFormat,omitempty"`
    ReceivingOrganization *string `json:"receivingOrganization,omitempty"`
    SchemaName string `json:"schemaName"`
    Transport interface{} `json:"transport"`
    Type string `json:"type"`
    
}

