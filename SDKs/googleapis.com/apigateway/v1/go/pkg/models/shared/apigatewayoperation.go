package shared

// ApigatewayOperation
// This resource represents a long-running operation that is the result of a network API call.
type ApigatewayOperation struct {
	Done     *bool                  `json:"done,omitempty"`
	Error    *ApigatewayStatus      `json:"error,omitempty"`
	Metadata map[string]interface{} `json:"metadata,omitempty"`
	Name     *string                `json:"name,omitempty"`
	Response map[string]interface{} `json:"response,omitempty"`
}
