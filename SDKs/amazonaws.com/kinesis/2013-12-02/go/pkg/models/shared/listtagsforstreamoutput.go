package shared

type ListTagsForStreamOutput struct {
	HasMoreTags bool  `json:"HasMoreTags"`
	Tags        []Tag `json:"Tags"`
}
