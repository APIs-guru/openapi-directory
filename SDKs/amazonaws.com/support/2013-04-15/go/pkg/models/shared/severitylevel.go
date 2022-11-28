package shared

// SeverityLevel
// A code and name pair that represents the severity level of a support case. The available values depend on the support plan for the account. For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/case-management.html#choosing-severity">Choosing a severity</a> in the <i>AWS Support User Guide</i>.
type SeverityLevel struct {
	Code *string `json:"code,omitempty"`
	Name *string `json:"name,omitempty"`
}
