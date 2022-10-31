package shared



type BatchCreatePrintServersResponse struct {
    Failures []PrintServerFailureInfo `json:"failures,omitempty"`
    PrintServers []PrintServer `json:"printServers,omitempty"`
    
}

