package shared

type OcrPhotoTextElement struct {
	BoundingPoints  []Point  `json:"BoundingPoints"`
	ConfidenceLevel *float64 `json:"ConfidenceLevel"`
	Height          *int32   `json:"Height"`
	Text            *string  `json:"Text"`
	Width           *int32   `json:"Width"`
	XLeft           *int32   `json:"XLeft"`
	YTop            *int32   `json:"YTop"`
}
