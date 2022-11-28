package shared

// DeleteRealtimeEndpointOutput
// <p>Represents the output of an <code>DeleteRealtimeEndpoint</code> operation.</p> <p>The result contains the <code>MLModelId</code> and the endpoint information for the <code>MLModel</code>. </p>
type DeleteRealtimeEndpointOutput struct {
	MlModelID            *string               `json:"MLModelId,omitempty"`
	RealtimeEndpointInfo *RealtimeEndpointInfo `json:"RealtimeEndpointInfo,omitempty"`
}
