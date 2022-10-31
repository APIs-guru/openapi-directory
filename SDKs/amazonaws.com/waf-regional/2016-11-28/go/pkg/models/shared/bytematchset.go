package shared



type ByteMatchSet struct {
    ByteMatchSetID string `json:"ByteMatchSetId"`
    ByteMatchTuples []ByteMatchTuple `json:"ByteMatchTuples"`
    Name *string `json:"Name,omitempty"`
    
}

