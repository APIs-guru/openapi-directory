package shared

// Aspect
// This type contains the name and values of a category aspect.
type Aspect struct {
	LocalizedName   *string  `json:"localizedName,omitempty"`
	LocalizedValues []string `json:"localizedValues,omitempty"`
}
