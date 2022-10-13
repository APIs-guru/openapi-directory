package shared

type PageResultCategoryTypeDto struct {
	Count        *int64            `json:"Count"`
	Items        []CategoryTypeDto `json:"Items"`
	NextPageLink *string           `json:"NextPageLink"`
}
