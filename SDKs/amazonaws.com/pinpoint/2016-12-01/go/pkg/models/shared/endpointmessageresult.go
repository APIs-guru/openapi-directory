package shared



type EndpointMessageResult struct {
    Address *string `json:"Address,omitempty"`
    DeliveryStatus DeliveryStatusEnum `json:"DeliveryStatus"`
    MessageID *string `json:"MessageId,omitempty"`
    StatusCode int64 `json:"StatusCode"`
    StatusMessage *string `json:"StatusMessage,omitempty"`
    UpdatedToken *string `json:"UpdatedToken,omitempty"`
    
}

