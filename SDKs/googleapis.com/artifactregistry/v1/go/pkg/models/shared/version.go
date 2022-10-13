package shared

type Version struct {
	CreateTime  *string                `json:"createTime"`
	Description *string                `json:"description"`
	Metadata    map[string]interface{} `json:"metadata"`
	Name        *string                `json:"name"`
	RelatedTags []Tag                  `json:"relatedTags"`
	UpdateTime  *string                `json:"updateTime"`
}
