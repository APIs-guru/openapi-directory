package shared

type ConnectorDocAudienceEnum string

const (
	ConnectorDocAudienceEnumApplicationOwner ConnectorDocAudienceEnum = "application_owner"
	ConnectorDocAudienceEnumConsumer         ConnectorDocAudienceEnum = "consumer"
)

type ConnectorDocFormatEnum string

const (
	ConnectorDocFormatEnumMarkdown ConnectorDocFormatEnum = "markdown"
)

type ConnectorDoc struct {
	Audience *ConnectorDocAudienceEnum `json:"audience,omitempty"`
	Format   *ConnectorDocFormatEnum   `json:"format,omitempty"`
	ID       *string                   `json:"id,omitempty"`
	Name     *string                   `json:"name,omitempty"`
	URL      *string                   `json:"url,omitempty"`
}
