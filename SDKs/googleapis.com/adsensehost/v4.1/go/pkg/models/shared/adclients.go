package shared

type AdClients struct {
	Etag          *string    `json:"etag"`
	Items         []AdClient `json:"items"`
	Kind          *string    `json:"kind"`
	NextPageToken *string    `json:"nextPageToken"`
}
