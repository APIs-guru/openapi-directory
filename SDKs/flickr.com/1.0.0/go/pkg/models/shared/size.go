package shared

type Size struct {
	Height *float64 `json:"height,omitempty"`
	Label  *string  `json:"label,omitempty"`
	Media  *string  `json:"media,omitempty"`
	Source *string  `json:"source,omitempty"`
	URL    *string  `json:"url,omitempty"`
	Width  *float64 `json:"width,omitempty"`
}
