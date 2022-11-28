package shared

// ListDeliverabilityTestReportsResponse
// A list of the predictive inbox placement test reports that are available for your account, regardless of whether or not those tests are complete.
type ListDeliverabilityTestReportsResponse struct {
	DeliverabilityTestReports []DeliverabilityTestReport `json:"DeliverabilityTestReports"`
	NextToken                 *string                    `json:"NextToken,omitempty"`
}
