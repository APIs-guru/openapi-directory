package shared

type PageResultOwnerTypeGroupDto struct {
	Count        *int64              `json:"Count"`
	Items        []OwnerTypeGroupDto `json:"Items"`
	NextPageLink *string             `json:"NextPageLink"`
}
