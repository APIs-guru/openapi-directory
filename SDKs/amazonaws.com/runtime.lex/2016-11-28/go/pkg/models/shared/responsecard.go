package shared

// ResponseCard
// If you configure a response card when creating your bots, Amazon Lex substitutes the session attributes and slot values that are available, and then returns it. The response card can also come from a Lambda function ( <code>dialogCodeHook</code> and <code>fulfillmentActivity</code> on an intent).
type ResponseCard struct {
	ContentType        *ContentTypeEnum    `json:"contentType,omitempty"`
	GenericAttachments []GenericAttachment `json:"genericAttachments,omitempty"`
	Version            *string             `json:"version,omitempty"`
}
