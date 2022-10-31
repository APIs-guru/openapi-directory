package shared



type ListClientsResponse struct {
    Clients []Client `json:"clients,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

