package shared



type Constraints struct {
    AllowExplicitContent *bool `json:"allowExplicitContent,omitempty"`
    MaximumQueueSegmentItemCount *int64 `json:"maximumQueueSegmentItemCount,omitempty"`
    UpdateUserTasteProfile *bool `json:"updateUserTasteProfile,omitempty"`
    
}

