package shared

type AnalysisCategoryDto struct {
	AccountCode    *string `json:"accountCode,omitempty"`
	AccountID      *int64  `json:"accountId,omitempty"`
	CategoryTypeID *int64  `json:"categoryTypeId,omitempty"`
	Description    *string `json:"description,omitempty"`
	ID             *int64  `json:"id,omitempty"`
	OrderIndex     *int32  `json:"orderIndex,omitempty"`
}
