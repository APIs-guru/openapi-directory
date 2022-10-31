package shared



type DataTransfersListResponse struct {
    DataTransfers []DataTransfer `json:"dataTransfers,omitempty"`
    Etag *string `json:"etag,omitempty"`
    Kind *string `json:"kind,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

