package shared

type DeleteRealtimeEndpointOutput struct {
	MlModelID            *string               `json:"MLModelId"`
	RealtimeEndpointInfo *RealtimeEndpointInfo `json:"RealtimeEndpointInfo"`
}
