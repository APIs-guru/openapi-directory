package shared

type CreateTagsRequest struct {
	ResourceID string `json:"ResourceId"`
	Tags       []Tag  `json:"Tags"`
}
