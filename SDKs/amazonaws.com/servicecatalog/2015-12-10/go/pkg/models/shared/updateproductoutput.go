package shared

type UpdateProductOutput struct {
	ProductViewDetail *ProductViewDetail `json:"ProductViewDetail"`
	Tags              []Tag              `json:"Tags"`
}
