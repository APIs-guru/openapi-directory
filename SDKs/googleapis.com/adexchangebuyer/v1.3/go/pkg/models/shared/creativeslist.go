package shared

type CreativesList struct {
	Items         []Creative `json:"items"`
	Kind          *string    `json:"kind"`
	NextPageToken *string    `json:"nextPageToken"`
}
