package shared

type ProductAdoptionPolicy struct {
	CategoryID      *string    `json:"categoryId,omitempty"`
	CategoryTreeID  *string    `json:"categoryTreeId,omitempty"`
	Exclusion       *Exclusion `json:"exclusion,omitempty"`
	ProductRequired *bool      `json:"productRequired,omitempty"`
}
