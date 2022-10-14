package shared

type Subtitle struct {
	Default *bool   `json:"default,omitempty"`
	Src     *string `json:"src,omitempty"`
	Srclang *string `json:"srclang,omitempty"`
	URI     *string `json:"uri,omitempty"`
}
