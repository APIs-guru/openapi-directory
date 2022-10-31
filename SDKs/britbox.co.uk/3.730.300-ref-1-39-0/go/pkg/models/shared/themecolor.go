package shared

type ThemeColor struct {
	Name    string   `json:"name"`
	Opacity *float32 `json:"opacity,omitempty"`
	Value   string   `json:"value"`
}
