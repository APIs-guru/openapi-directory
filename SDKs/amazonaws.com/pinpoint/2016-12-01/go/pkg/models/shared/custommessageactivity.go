package shared

type CustomMessageActivity struct {
	DeliveryURI     *string                    `json:"DeliveryUri,omitempty"`
	EndpointTypes   []EndpointTypesElementEnum `json:"EndpointTypes,omitempty"`
	MessageConfig   *JourneyCustomMessage      `json:"MessageConfig,omitempty"`
	NextActivity    *string                    `json:"NextActivity,omitempty"`
	TemplateName    *string                    `json:"TemplateName,omitempty"`
	TemplateVersion *string                    `json:"TemplateVersion,omitempty"`
}
