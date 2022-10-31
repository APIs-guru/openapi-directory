package shared

type PageResultCategoryTypeDto struct {
	Count        *int64            `json:"Count,omitempty"`
	Items        []CategoryTypeDto `json:"Items,omitempty"`
	NextPageLink *string           `json:"NextPageLink,omitempty"`
}
