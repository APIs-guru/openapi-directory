package shared

// AccountAttributesMessage
// Data returned by the <b>DescribeAccountAttributes</b> action.
type AccountAttributesMessage struct {
	AccountQuotas []AccountQuota
}
