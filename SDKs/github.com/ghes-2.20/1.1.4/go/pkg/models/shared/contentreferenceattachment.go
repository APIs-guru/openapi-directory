package shared



type ContentReferenceAttachment struct {
    Body string `json:"body"`
    ID int64 `json:"id"`
    NodeID *string `json:"node_id,omitempty"`
    Title string `json:"title"`
    
}

