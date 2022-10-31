package shared



type SubscribedUploadShare struct {
    ID int64 `json:"id"`
    TargetNodeID *int64 `json:"targetNodeId,omitempty"`
    
}

