package shared

type CustomMessageActivity struct {
	DeliveryURI     *string                    `json:"DeliveryUri"`
	EndpointTypes   []EndpointTypesElementEnum `json:"EndpointTypes"`
	MessageConfig   *JourneyCustomMessage      `json:"MessageConfig"`
	NextActivity    *string                    `json:"NextActivity"`
	TemplateName    *string                    `json:"TemplateName"`
	TemplateVersion *string                    `json:"TemplateVersion"`
}
