package shared



type RecentCaseCommunications struct {
    Communications []Communication `json:"communications,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

