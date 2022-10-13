package shared

type ProductAdoptionPolicy struct {
	CategoryID      *string    `json:"categoryId"`
	CategoryTreeID  *string    `json:"categoryTreeId"`
	Exclusion       *Exclusion `json:"exclusion"`
	ProductRequired *bool      `json:"productRequired"`
}
