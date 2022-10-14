package shared

type SignupInfo struct {
	CompletionToken *string `json:"completionToken,omitempty"`
	Kind            *string `json:"kind,omitempty"`
	URL             *string `json:"url,omitempty"`
}
