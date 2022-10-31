package shared

type UpdateProductOutput struct {
	ProductViewDetail *ProductViewDetail `json:"ProductViewDetail,omitempty"`
	Tags              []Tag              `json:"Tags,omitempty"`
}
