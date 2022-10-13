package shared

type BigOvenModelRecipeCategory struct {
	Category             *string `json:"Category"`
	DefaultActiveMinutes *int32  `json:"DefaultActiveMinutes"`
	DefaultTotalMinutes  *int32  `json:"DefaultTotalMinutes"`
	ID                   *int32  `json:"ID"`
	ParentID             *int32  `json:"ParentID"`
	PrimaryImage         *string `json:"PrimaryImage"`
	ShortDescription     *string `json:"ShortDescription"`
}
