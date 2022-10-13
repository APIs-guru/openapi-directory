package shared

type InvocationResponse struct {
	Payload    *string `json:"Payload"`
	StatusCode *int64  `json:"StatusCode"`
}
