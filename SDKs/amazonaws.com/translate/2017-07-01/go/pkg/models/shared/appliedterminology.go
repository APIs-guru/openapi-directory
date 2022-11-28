package shared

// AppliedTerminology
// The custom terminology applied to the input text by Amazon Translate for the translated text response. This is optional in the response and will only be present if you specified terminology input in the request. Currently, only one terminology can be applied per TranslateText request.
type AppliedTerminology struct {
	Name  *string `json:"Name,omitempty"`
	Terms []Term  `json:"Terms,omitempty"`
}
