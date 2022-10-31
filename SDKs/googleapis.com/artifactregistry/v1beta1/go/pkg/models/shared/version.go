package shared



type Version struct {
    CreateTime *string `json:"createTime,omitempty"`
    Description *string `json:"description,omitempty"`
    Name *string `json:"name,omitempty"`
    RelatedTags []Tag `json:"relatedTags,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    
}

