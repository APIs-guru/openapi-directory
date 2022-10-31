package shared



type PutLogEventsResponse struct {
    NextSequenceToken *string `json:"nextSequenceToken,omitempty"`
    RejectedLogEventsInfo *RejectedLogEventsInfo `json:"rejectedLogEventsInfo,omitempty"`
    
}

