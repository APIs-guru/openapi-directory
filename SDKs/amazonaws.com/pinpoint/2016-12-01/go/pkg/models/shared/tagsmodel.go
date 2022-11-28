package shared

// TagsModel
// Specifies the tags (keys and values) for an application, campaign, message template, or segment.
type TagsModel struct {
	Tags map[string]string `json:"tags"`
}
