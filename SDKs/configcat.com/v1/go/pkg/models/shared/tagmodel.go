package shared



type TagModel struct {
    Color *string `json:"color,omitempty"`
    Name *string `json:"name,omitempty"`
    Product *ProductModel `json:"product,omitempty"`
    TagID *int64 `json:"tagId,omitempty"`
    
}

