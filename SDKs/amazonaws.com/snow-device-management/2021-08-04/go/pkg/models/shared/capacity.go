package shared

type Capacity struct {
	Available *int64  `json:"available"`
	Name      *string `json:"name"`
	Total     *int64  `json:"total"`
	Unit      *string `json:"unit"`
	Used      *int64  `json:"used"`
}
