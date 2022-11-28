package shared

type SenderFormatEnum string

const (
	SenderFormatEnumCsv SenderFormatEnum = "CSV"
)

// Sender
// An sender of reports to the data hub
type Sender struct {
	Description      string           `json:"description"`
	Format           SenderFormatEnum `json:"format"`
	Meta             *SettingMetadata `json:"meta,omitempty"`
	Name             string           `json:"name"`
	OrganizationName *string          `json:"organizationName,omitempty"`
	Schema           string           `json:"schema"`
	Topic            string           `json:"topic"`
}

// SenderInput
// An sender of reports to the data hub
type SenderInput struct {
	Description string           `json:"description"`
	Format      SenderFormatEnum `json:"format"`
	Name        string           `json:"name"`
	Schema      string           `json:"schema"`
	Topic       string           `json:"topic"`
}
