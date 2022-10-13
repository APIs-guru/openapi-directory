package shared

type Subtitle struct {
	Default *bool   `json:"default"`
	Src     *string `json:"src"`
	Srclang *string `json:"srclang"`
	URI     *string `json:"uri"`
}
