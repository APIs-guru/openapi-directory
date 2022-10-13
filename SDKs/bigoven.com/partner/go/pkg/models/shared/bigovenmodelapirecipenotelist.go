package shared

type BigOvenModelAPIRecipeNoteList struct {
	ResultCount *int32                      `json:"ResultCount"`
	Results     []BigOvenModelAPIRecipeNote `json:"Results"`
}
