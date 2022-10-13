package shared

type Payroll struct {
	CheckDate     string         `json:"check_date"`
	CompanyID     *string        `json:"company_id"`
	Compensations []Compensation `json:"compensations"`
	EndDate       string         `json:"end_date"`
	ID            string         `json:"id"`
	Processed     bool           `json:"processed"`
	ProcessedDate *string        `json:"processed_date"`
	StartDate     string         `json:"start_date"`
	Totals        *PayrollTotals `json:"totals"`
}
