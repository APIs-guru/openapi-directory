package shared

type CompanyFinancialYearViewModel struct {
	FirstMonth *int32 `json:"firstMonth"`
	StartMonth *int32 `json:"startMonth"`
	StartYear  *int32 `json:"startYear"`
}
