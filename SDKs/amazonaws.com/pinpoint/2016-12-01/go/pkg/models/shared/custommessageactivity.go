package shared

// CustomMessageActivity
// The settings for a custom message activity. This type of activity calls an AWS Lambda function or web hook that sends messages to participants.
type CustomMessageActivity struct {
	DeliveryURI     *string                    `json:"DeliveryUri,omitempty"`
	EndpointTypes   []EndpointTypesElementEnum `json:"EndpointTypes,omitempty"`
	MessageConfig   *JourneyCustomMessage      `json:"MessageConfig,omitempty"`
	NextActivity    *string                    `json:"NextActivity,omitempty"`
	TemplateName    *string                    `json:"TemplateName,omitempty"`
	TemplateVersion *string                    `json:"TemplateVersion,omitempty"`
}
