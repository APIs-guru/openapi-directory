package shared

type ListCommandInvocationsResult struct {
	CommandInvocations []CommandInvocation `json:"CommandInvocations,omitempty"`
	NextToken          *string             `json:"NextToken,omitempty"`
}
