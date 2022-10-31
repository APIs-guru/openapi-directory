package shared

type Aspect struct {
	LocalizedName   *string  `json:"localizedName,omitempty"`
	LocalizedValues []string `json:"localizedValues,omitempty"`
}
