package shared



type SyncResourceResponse struct {
    ActionTaken *SyncActionEnum `json:"actionTaken,omitempty"`
    ApplicationArn *string `json:"applicationArn,omitempty"`
    ResourceArn *string `json:"resourceArn,omitempty"`
    
}

