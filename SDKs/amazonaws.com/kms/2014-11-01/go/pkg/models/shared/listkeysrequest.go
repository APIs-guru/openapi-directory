package shared

type ListKeysRequest struct {
	Limit  *int64  `json:"Limit,omitempty"`
	Marker *string `json:"Marker,omitempty"`
}
