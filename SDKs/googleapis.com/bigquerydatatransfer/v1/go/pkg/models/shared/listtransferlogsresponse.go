package shared



type ListTransferLogsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    TransferMessages []TransferMessage `json:"transferMessages,omitempty"`
    
}

