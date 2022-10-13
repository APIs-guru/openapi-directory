package shared

type ListDeliverabilityTestReportsResponse struct {
	DeliverabilityTestReports []DeliverabilityTestReport `json:"DeliverabilityTestReports"`
	NextToken                 *string                    `json:"NextToken"`
}
