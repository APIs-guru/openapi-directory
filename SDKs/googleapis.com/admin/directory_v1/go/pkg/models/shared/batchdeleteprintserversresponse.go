package shared



type BatchDeletePrintServersResponse struct {
    FailedPrintServers []PrintServerFailureInfo `json:"failedPrintServers,omitempty"`
    PrintServerIds []string `json:"printServerIds,omitempty"`
    
}

