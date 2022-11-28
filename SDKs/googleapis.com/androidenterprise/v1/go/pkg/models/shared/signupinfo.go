package shared

// SignupInfo
// A resource returned by the GenerateSignupUrl API, which contains the Signup URL and Completion Token.
type SignupInfo struct {
	CompletionToken *string `json:"completionToken,omitempty"`
	Kind            *string `json:"kind,omitempty"`
	URL             *string `json:"url,omitempty"`
}
