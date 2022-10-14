package shared

type CompanyFinancialYearViewModel struct {
	FirstMonth *int32 `json:"firstMonth,omitempty"`
	StartMonth *int32 `json:"startMonth,omitempty"`
	StartYear  *int32 `json:"startYear,omitempty"`
}
