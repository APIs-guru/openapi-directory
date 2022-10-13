package shared

type ListConnectionsResponse struct {
	Connections   []Connection `json:"connections"`
	NextPageToken *string      `json:"nextPageToken"`
}
