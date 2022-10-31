package shared



type GitRefObject struct {
    Sha string `json:"sha"`
    Type string `json:"type"`
    URL string `json:"url"`
    
}

type GitRef struct {
    NodeID string `json:"node_id"`
    Object GitRefObject `json:"object"`
    Ref string `json:"ref"`
    URL string `json:"url"`
    
}

