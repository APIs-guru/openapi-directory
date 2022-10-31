package shared

type ProductSummary struct {
	AdditionalImages []Image  `json:"additionalImages,omitempty"`
	Aspects          []Aspect `json:"aspects,omitempty"`
	Brand            *string  `json:"brand,omitempty"`
	Ean              []string `json:"ean,omitempty"`
	Epid             *string  `json:"epid,omitempty"`
	Gtin             []string `json:"gtin,omitempty"`
	Image            *Image   `json:"image,omitempty"`
	Isbn             []string `json:"isbn,omitempty"`
	Mpn              []string `json:"mpn,omitempty"`
	ProductHref      *string  `json:"productHref,omitempty"`
	ProductWebURL    *string  `json:"productWebUrl,omitempty"`
	Title            *string  `json:"title,omitempty"`
	Upc              []string `json:"upc,omitempty"`
}
