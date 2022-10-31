package shared



type LaunchPathSummary struct {
    ConstraintSummaries []ConstraintSummary `json:"ConstraintSummaries,omitempty"`
    ID *string `json:"Id,omitempty"`
    Name *string `json:"Name,omitempty"`
    Tags []Tag `json:"Tags,omitempty"`
    
}

