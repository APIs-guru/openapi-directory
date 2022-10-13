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
	Audience *ConnectorDocAudienceEnum `json:"audience"`
	Format   *ConnectorDocFormatEnum   `json:"format"`
	ID       *string                   `json:"id"`
	Name     *string                   `json:"name"`
	URL      *string                   `json:"url"`
}
