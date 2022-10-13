package shared

type Size struct {
	Height *float64 `json:"height"`
	Label  *string  `json:"label"`
	Media  *string  `json:"media"`
	Source *string  `json:"source"`
	URL    *string  `json:"url"`
	Width  *float64 `json:"width"`
}
