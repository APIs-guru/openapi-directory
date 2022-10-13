package shared

type Listing struct {
	FullDescription  *string `json:"fullDescription"`
	Language         *string `json:"language"`
	ShortDescription *string `json:"shortDescription"`
	Title            *string `json:"title"`
	Video            *string `json:"video"`
}
