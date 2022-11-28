package shared

// CustomDeliveryConfiguration
// Specifies the delivery configuration settings for sending a campaign or campaign treatment through a custom channel. This object is required if you use the CampaignCustomMessage object to define the message to send for the campaign or campaign treatment.
type CustomDeliveryConfiguration struct {
	DeliveryURI   string                     `json:"DeliveryUri"`
	EndpointTypes []EndpointTypesElementEnum `json:"EndpointTypes,omitempty"`
}
