package shared

type Product struct {
	Aspects     []Aspect `json:"aspects"`
	Brand       *string  `json:"brand"`
	Description *string  `json:"description"`
	Epid        *string  `json:"epid"`
	ImageUrls   []string `json:"imageUrls"`
	Title       *string  `json:"title"`
}
