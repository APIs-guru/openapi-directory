package shared




type SenderFormatEnum string

const (
    SenderFormatEnumCsv SenderFormatEnum = "CSV"
)


type Sender struct {
    Description string `json:"description"`
    Format SenderFormatEnum `json:"format"`
    Meta *SettingMetadata `json:"meta,omitempty"`
    Name string `json:"name"`
    OrganizationName *string `json:"organizationName,omitempty"`
    Schema string `json:"schema"`
    Topic string `json:"topic"`
    
}

