package shared

type BigOvenModelAPIIngredient struct {
	DisplayIndex          *int32                         `json:"DisplayIndex"`
	DisplayQuantity       *string                        `json:"DisplayQuantity"`
	HTMLName              *string                        `json:"HTMLName"`
	IngredientID          *int64                         `json:"IngredientID"`
	IngredientInfo        *BigOvenModelAPIIngredientInfo `json:"IngredientInfo"`
	IsHeading             *bool                          `json:"IsHeading"`
	IsLinked              *bool                          `json:"IsLinked"`
	MetricDisplayQuantity *string                        `json:"MetricDisplayQuantity"`
	MetricQuantity        *float64                       `json:"MetricQuantity"`
	MetricUnit            *string                        `json:"MetricUnit"`
	Name                  *string                        `json:"Name"`
	PreparationNotes      *string                        `json:"PreparationNotes"`
	Quantity              *float64                       `json:"Quantity"`
	Unit                  *string                        `json:"Unit"`
}
