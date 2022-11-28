package shared

// CodeHook
// Specifies a Lambda function that verifies requests to a bot or fulfills the user's request to a bot..
type CodeHook struct {
	MessageVersion string `json:"messageVersion"`
	URI            string `json:"uri"`
}
