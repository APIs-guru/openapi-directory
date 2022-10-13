package shared

type SavedAdStyles struct {
	Etag          *string        `json:"etag"`
	Items         []SavedAdStyle `json:"items"`
	Kind          *string        `json:"kind"`
	NextPageToken *string        `json:"nextPageToken"`
}
