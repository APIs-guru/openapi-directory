package shared



type GitTagObject struct {
    Sha string `json:"sha"`
    Type string `json:"type"`
    URL string `json:"url"`
    
}

type GitTagTagger struct {
    Date string `json:"date"`
    Email string `json:"email"`
    Name string `json:"name"`
    
}

type GitTag struct {
    Message string `json:"message"`
    NodeID string `json:"node_id"`
    Object GitTagObject `json:"object"`
    Sha string `json:"sha"`
    Tag string `json:"tag"`
    Tagger GitTagTagger `json:"tagger"`
    URL string `json:"url"`
    Verification *Verification `json:"verification,omitempty"`
    
}

