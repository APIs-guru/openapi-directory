package shared

type ListCommandInvocationsResult struct {
	CommandInvocations []CommandInvocation `json:"CommandInvocations"`
	NextToken          *string             `json:"NextToken"`
}
