package shared

type AcEntryDto struct {
	AccountCode        *string  `json:"accountCode"`
	AnalysisCategoryID *int64   `json:"analysisCategoryId"`
	Description        *string  `json:"description"`
	ID                 *int64   `json:"id"`
	Value              *float64 `json:"value"`
}
