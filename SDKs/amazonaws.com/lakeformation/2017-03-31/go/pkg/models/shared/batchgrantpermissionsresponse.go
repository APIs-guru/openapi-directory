package shared

type BatchGrantPermissionsResponse struct {
	Failures []BatchPermissionsFailureEntry `json:"Failures"`
}
