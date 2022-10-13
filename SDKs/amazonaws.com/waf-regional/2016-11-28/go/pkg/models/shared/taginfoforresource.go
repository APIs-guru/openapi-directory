package shared

type TagInfoForResource struct {
	ResourceArn *string `json:"ResourceARN"`
	TagList     []Tag   `json:"TagList"`
}
