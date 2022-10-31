package shared



type CustomDeliveryConfiguration struct {
    DeliveryURI string `json:"DeliveryUri"`
    EndpointTypes []EndpointTypesElementEnum `json:"EndpointTypes,omitempty"`
    
}

