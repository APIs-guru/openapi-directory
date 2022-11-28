package shared

// CodeHookSpecification
// Contains information about code hooks that Amazon Lex calls during a conversation.
type CodeHookSpecification struct {
	LambdaCodeHook LambdaCodeHook `json:"lambdaCodeHook"`
}
