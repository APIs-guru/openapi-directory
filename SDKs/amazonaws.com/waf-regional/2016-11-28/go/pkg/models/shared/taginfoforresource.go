package shared

type TagInfoForResource struct {
	ResourceArn *string `json:"ResourceARN,omitempty"`
	TagList     []Tag   `json:"TagList,omitempty"`
}
