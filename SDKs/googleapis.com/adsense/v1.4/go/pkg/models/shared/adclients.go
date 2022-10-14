package shared

type AdClients struct {
	Etag          *string    `json:"etag,omitempty"`
	Items         []AdClient `json:"items,omitempty"`
	Kind          *string    `json:"kind,omitempty"`
	NextPageToken *string    `json:"nextPageToken,omitempty"`
}
