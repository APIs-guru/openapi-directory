package shared



type StartSessionRequest struct {
    DocumentName *string `json:"DocumentName,omitempty"`
    Parameters map[string][]string `json:"Parameters,omitempty"`
    Target string `json:"Target"`
    
}

