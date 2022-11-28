package shared

// ListAccessLevelsResponse
// A response to `ListAccessLevelsRequest`.
type ListAccessLevelsResponse struct {
	AccessLevels  []AccessLevel `json:"accessLevels,omitempty"`
	NextPageToken *string       `json:"nextPageToken,omitempty"`
}
