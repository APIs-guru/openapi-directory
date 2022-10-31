package shared

type PageResultAnalysisCategoryDto struct {
	Count        *int64                `json:"Count,omitempty"`
	Items        []AnalysisCategoryDto `json:"Items,omitempty"`
	NextPageLink *string               `json:"NextPageLink,omitempty"`
}
