package shared

// LambdaCodeHook
// Specifies a Lambda function that verifies requests to a bot or fulfilles the user's request to a bot.
type LambdaCodeHook struct {
	CodeHookInterfaceVersion string `json:"codeHookInterfaceVersion"`
	LambdaArn                string `json:"lambdaARN"`
}
