package shared

type BigOvenModelRecipeCategory struct {
	Category             *string `json:"Category,omitempty"`
	DefaultActiveMinutes *int32  `json:"DefaultActiveMinutes,omitempty"`
	DefaultTotalMinutes  *int32  `json:"DefaultTotalMinutes,omitempty"`
	ID                   *int32  `json:"ID,omitempty"`
	ParentID             *int32  `json:"ParentID,omitempty"`
	PrimaryImage         *string `json:"PrimaryImage,omitempty"`
	ShortDescription     *string `json:"ShortDescription,omitempty"`
}
