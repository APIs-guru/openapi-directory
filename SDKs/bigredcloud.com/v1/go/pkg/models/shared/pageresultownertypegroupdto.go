package shared

type PageResultOwnerTypeGroupDto struct {
	Count        *int64              `json:"Count,omitempty"`
	Items        []OwnerTypeGroupDto `json:"Items,omitempty"`
	NextPageLink *string             `json:"NextPageLink,omitempty"`
}
