package shared



type IErrorInfo struct {
    Code *string `json:"Code,omitempty"`
    FaultMessage *string `json:"FaultMessage,omitempty"`
    Group *string `json:"Group,omitempty"`
    UserVisibleMessage *string `json:"UserVisibleMessage,omitempty"`
    
}

