package shared

type ProfitAndLossExpenses struct {
	Records []interface{} `json:"records"`
	Total   float64       `json:"total"`
}

type ProfitAndLossGrossProfit struct {
	Records []interface{} `json:"records"`
	Total   float64       `json:"total"`
}

type ProfitAndLossIncome struct {
	Records []interface{} `json:"records"`
	Total   float64       `json:"total"`
}

type ProfitAndLossNetIncome struct {
	Records []interface{} `json:"records"`
	Total   float64       `json:"total"`
}

type ProfitAndLossNetOperatingIncome struct {
	Records []interface{} `json:"records"`
	Total   float64       `json:"total"`
}

type ProfitAndLoss struct {
	Currency           string                           `json:"currency"`
	CustomerID         *string                          `json:"customer_id"`
	EndDate            *string                          `json:"end_date"`
	Expenses           ProfitAndLossExpenses            `json:"expenses"`
	GrossProfit        *ProfitAndLossGrossProfit        `json:"gross_profit"`
	ID                 *string                          `json:"id"`
	Income             ProfitAndLossIncome              `json:"income"`
	NetIncome          *ProfitAndLossNetIncome          `json:"net_income"`
	NetOperatingIncome *ProfitAndLossNetOperatingIncome `json:"net_operating_income"`
	ReportName         string                           `json:"report_name"`
	StartDate          *string                          `json:"start_date"`
}
