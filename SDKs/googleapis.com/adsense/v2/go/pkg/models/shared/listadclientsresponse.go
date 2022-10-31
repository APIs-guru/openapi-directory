package shared



type ListAdClientsResponse struct {
    AdClients []AdClient `json:"adClients,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

