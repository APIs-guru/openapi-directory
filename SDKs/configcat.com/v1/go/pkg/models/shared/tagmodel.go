package shared

type TagModel struct {
	Color   *string       `json:"color"`
	Name    *string       `json:"name"`
	Product *ProductModel `json:"product"`
	TagID   *int64        `json:"tagId"`
}
