package shared

type ListKeysRequest struct {
	Limit  *int64  `json:"Limit"`
	Marker *string `json:"Marker"`
}
