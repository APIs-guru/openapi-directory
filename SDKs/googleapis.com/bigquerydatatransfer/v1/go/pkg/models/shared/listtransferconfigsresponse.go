package shared



type ListTransferConfigsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    TransferConfigs []TransferConfig `json:"transferConfigs,omitempty"`
    
}

