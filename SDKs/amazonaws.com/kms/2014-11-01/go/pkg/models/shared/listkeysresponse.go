package shared

type ListKeysResponse struct {
	Keys       []KeyListEntry `json:"Keys"`
	NextMarker *string        `json:"NextMarker"`
	Truncated  *bool          `json:"Truncated"`
}
