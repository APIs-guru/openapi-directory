package shared

type CreateRealtimeEndpointOutput struct {
	MlModelID            *string               `json:"MLModelId"`
	RealtimeEndpointInfo *RealtimeEndpointInfo `json:"RealtimeEndpointInfo"`
}
