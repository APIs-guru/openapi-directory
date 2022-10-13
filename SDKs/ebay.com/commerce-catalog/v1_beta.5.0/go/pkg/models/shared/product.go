package shared

type Product struct {
	AdditionalImages           []Image  `json:"additionalImages"`
	Aspects                    []Aspect `json:"aspects"`
	Brand                      *string  `json:"brand"`
	Description                *string  `json:"description"`
	Ean                        []string `json:"ean"`
	Epid                       *string  `json:"epid"`
	Gtin                       []string `json:"gtin"`
	Image                      *Image   `json:"image"`
	Isbn                       []string `json:"isbn"`
	Mpn                        []string `json:"mpn"`
	OtherApplicableCategoryIds []string `json:"otherApplicableCategoryIds"`
	PrimaryCategoryID          *string  `json:"primaryCategoryId"`
	ProductWebURL              *string  `json:"productWebUrl"`
	Title                      *string  `json:"title"`
	Upc                        []string `json:"upc"`
	Version                    *string  `json:"version"`
}
