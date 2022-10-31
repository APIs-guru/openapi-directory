package shared



type Product struct {
    Count *int64 `json:"count,omitempty"`
    Description *string `json:"description,omitempty"`
    ID *string `json:"id,omitempty"`
    Logo *File `json:"logo,omitempty"`
    Name string `json:"name"`
    Sequence *int64 `json:"sequence,omitempty"`
    Slug string `json:"slug"`
    Translations []Translation `json:"translations,omitempty"`
    Visible bool `json:"visible"`
    
}

