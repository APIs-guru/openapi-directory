package shared



type License struct {
    Body string `json:"body"`
    Conditions []string `json:"conditions"`
    Description string `json:"description"`
    Featured bool `json:"featured"`
    HTMLURL string `json:"html_url"`
    Implementation string `json:"implementation"`
    Key string `json:"key"`
    Limitations []string `json:"limitations"`
    Name string `json:"name"`
    NodeID string `json:"node_id"`
    Permissions []string `json:"permissions"`
    SpdxID string `json:"spdx_id"`
    URL string `json:"url"`
    
}

