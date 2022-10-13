package shared

type PageResultAnalysisCategoryDto struct {
	Count        *int64                `json:"Count"`
	Items        []AnalysisCategoryDto `json:"Items"`
	NextPageLink *string               `json:"NextPageLink"`
}
