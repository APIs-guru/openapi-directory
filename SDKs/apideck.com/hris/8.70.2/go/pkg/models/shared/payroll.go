package shared

type Payroll struct {
	CheckDate     string         `json:"check_date"`
	CompanyID     *string        `json:"company_id,omitempty"`
	Compensations []Compensation `json:"compensations,omitempty"`
	EndDate       string         `json:"end_date"`
	ID            string         `json:"id"`
	Processed     bool           `json:"processed"`
	ProcessedDate *string        `json:"processed_date,omitempty"`
	StartDate     string         `json:"start_date"`
	Totals        *PayrollTotals `json:"totals,omitempty"`
}
