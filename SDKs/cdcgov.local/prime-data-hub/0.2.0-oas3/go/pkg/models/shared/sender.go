package shared

type SenderFormatEnum string

const (
	SenderFormatEnumCsv SenderFormatEnum = "CSV"
)

type Sender struct {
	Description      string           `json:"description"`
	Format           SenderFormatEnum `json:"format"`
	Meta             *SettingMetadata `json:"meta"`
	Name             string           `json:"name"`
	OrganizationName *string          `json:"organizationName"`
	Schema           string           `json:"schema"`
	Topic            string           `json:"topic"`
}
