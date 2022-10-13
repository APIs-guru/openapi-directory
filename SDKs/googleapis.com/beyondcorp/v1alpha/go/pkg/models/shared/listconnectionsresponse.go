package shared

type ListConnectionsResponse struct {
	Connections   []Connection `json:"connections"`
	NextPageToken *string      `json:"nextPageToken"`
	Unreachable   []string     `json:"unreachable"`
}
