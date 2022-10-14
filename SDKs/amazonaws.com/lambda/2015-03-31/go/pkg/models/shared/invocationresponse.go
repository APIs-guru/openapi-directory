package shared

type InvocationResponse struct {
	Payload    *string `json:"Payload,omitempty"`
	StatusCode *int64  `json:"StatusCode,omitempty"`
}
