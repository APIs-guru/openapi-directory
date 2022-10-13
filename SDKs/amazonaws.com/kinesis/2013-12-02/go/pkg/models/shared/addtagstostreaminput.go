package shared

type AddTagsToStreamInput struct {
	StreamName string            `json:"StreamName"`
	Tags       map[string]string `json:"Tags"`
}
