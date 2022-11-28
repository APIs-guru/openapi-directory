package shared

// GetHostnameSuggestionResult
// Contains the response to a <code>GetHostnameSuggestion</code> request.
type GetHostnameSuggestionResult struct {
	Hostname *string `json:"Hostname,omitempty"`
	LayerID  *string `json:"LayerId,omitempty"`
}
