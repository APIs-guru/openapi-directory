package shared

type DescribeActivationsResult struct {
	ActivationList []Activation `json:"ActivationList"`
	NextToken      *string      `json:"NextToken"`
}
