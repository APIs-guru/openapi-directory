package shared

type ListAccessLevelsResponse struct {
	AccessLevels  []AccessLevel `json:"accessLevels"`
	NextPageToken *string       `json:"nextPageToken"`
}
