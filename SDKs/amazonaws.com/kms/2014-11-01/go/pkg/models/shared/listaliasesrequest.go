package shared

type ListAliasesRequest struct {
	KeyID  *string `json:"KeyId,omitempty"`
	Limit  *int64  `json:"Limit,omitempty"`
	Marker *string `json:"Marker,omitempty"`
}
