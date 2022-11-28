package shared

// TemplatesResponse
// Provides information about all the message templates that are associated with your Amazon Pinpoint account.
type TemplatesResponse struct {
	Item      []TemplateResponse `json:"Item"`
	NextToken *string            `json:"NextToken,omitempty"`
}
