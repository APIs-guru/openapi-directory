package shared

// ReplaceAccessLevelsRequest
// A request to replace all existing Access Levels in an Access Policy with the Access Levels provided. This is done atomically.
type ReplaceAccessLevelsRequest struct {
	AccessLevels []AccessLevel `json:"accessLevels,omitempty"`
	Etag         *string       `json:"etag,omitempty"`
}
