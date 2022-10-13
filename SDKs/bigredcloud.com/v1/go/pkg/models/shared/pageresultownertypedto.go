package shared

type PageResultOwnerTypeDto struct {
	Count        *int64         `json:"Count"`
	Items        []OwnerTypeDto `json:"Items"`
	NextPageLink *string        `json:"NextPageLink"`
}
