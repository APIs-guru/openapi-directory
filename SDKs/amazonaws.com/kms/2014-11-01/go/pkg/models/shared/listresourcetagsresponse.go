package shared

type ListResourceTagsResponse struct {
	NextMarker *string `json:"NextMarker"`
	Tags       []Tag   `json:"Tags"`
	Truncated  *bool   `json:"Truncated"`
}
