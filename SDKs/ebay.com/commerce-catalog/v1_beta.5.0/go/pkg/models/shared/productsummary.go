package shared

type ProductSummary struct {
	AdditionalImages []Image  `json:"additionalImages"`
	Aspects          []Aspect `json:"aspects"`
	Brand            *string  `json:"brand"`
	Ean              []string `json:"ean"`
	Epid             *string  `json:"epid"`
	Gtin             []string `json:"gtin"`
	Image            *Image   `json:"image"`
	Isbn             []string `json:"isbn"`
	Mpn              []string `json:"mpn"`
	ProductHref      *string  `json:"productHref"`
	ProductWebURL    *string  `json:"productWebUrl"`
	Title            *string  `json:"title"`
	Upc              []string `json:"upc"`
}
