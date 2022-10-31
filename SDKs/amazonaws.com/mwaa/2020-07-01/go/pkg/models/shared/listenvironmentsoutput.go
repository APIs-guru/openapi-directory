package shared

type ListEnvironmentsOutput struct {
	Environments []string `json:"Environments"`
	NextToken    *string  `json:"NextToken,omitempty"`
}
