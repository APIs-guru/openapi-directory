package shared

// Meta
// The Meta Object contains basic information regarding the request, whether it was successful, and the response given by the API.  Check `responses` to see a description of types of response codes the API might give you under different cirumstances.
type Meta struct {
	Msg        *string `json:"msg,omitempty"`
	ResponseID *string `json:"response_id,omitempty"`
	Status     *int32  `json:"status,omitempty"`
}
