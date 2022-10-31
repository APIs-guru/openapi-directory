package shared



type CreateRealtimeEndpointOutput struct {
    MlModelID *string `json:"MLModelId,omitempty"`
    RealtimeEndpointInfo *RealtimeEndpointInfo `json:"RealtimeEndpointInfo,omitempty"`
    
}

