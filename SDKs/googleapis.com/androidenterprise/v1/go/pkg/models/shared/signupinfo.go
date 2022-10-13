package shared

type SignupInfo struct {
	CompletionToken *string `json:"completionToken"`
	Kind            *string `json:"kind"`
	URL             *string `json:"url"`
}
