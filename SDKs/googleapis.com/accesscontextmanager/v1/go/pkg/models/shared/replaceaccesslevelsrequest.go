package shared

type ReplaceAccessLevelsRequest struct {
	AccessLevels []AccessLevel `json:"accessLevels"`
	Etag         *string       `json:"etag"`
}
