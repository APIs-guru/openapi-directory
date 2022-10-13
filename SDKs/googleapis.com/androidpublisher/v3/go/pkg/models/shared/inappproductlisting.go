package shared

type InAppProductListing struct {
	Benefits    []string `json:"benefits"`
	Description *string  `json:"description"`
	Title       *string  `json:"title"`
}
