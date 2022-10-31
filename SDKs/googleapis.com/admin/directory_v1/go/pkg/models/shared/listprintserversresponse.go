package shared



type ListPrintServersResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    PrintServers []PrintServer `json:"printServers,omitempty"`
    
}

