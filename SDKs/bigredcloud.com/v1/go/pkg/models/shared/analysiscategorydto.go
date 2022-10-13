package shared

type AnalysisCategoryDto struct {
	AccountCode    *string `json:"accountCode"`
	AccountID      *int64  `json:"accountId"`
	CategoryTypeID *int64  `json:"categoryTypeId"`
	Description    *string `json:"description"`
	ID             *int64  `json:"id"`
	OrderIndex     *int32  `json:"orderIndex"`
}
