package shared

type Version struct {
	CreateTime  *string `json:"createTime"`
	Description *string `json:"description"`
	Name        *string `json:"name"`
	RelatedTags []Tag   `json:"relatedTags"`
	UpdateTime  *string `json:"updateTime"`
}
