package shared

type ListKeyPoliciesRequest struct {
	KeyID  string  `json:"KeyId"`
	Limit  *int64  `json:"Limit"`
	Marker *string `json:"Marker"`
}
