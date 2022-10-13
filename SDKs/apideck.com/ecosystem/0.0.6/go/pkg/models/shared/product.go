package shared

type Product struct {
	Count        *int64        `json:"count"`
	Description  *string       `json:"description"`
	ID           *string       `json:"id"`
	Logo         *File         `json:"logo"`
	Name         string        `json:"name"`
	Sequence     *int64        `json:"sequence"`
	Slug         string        `json:"slug"`
	Translations []Translation `json:"translations"`
	Visible      bool          `json:"visible"`
}
