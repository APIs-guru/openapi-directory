package shared

type ResolveConnectionsResponse struct {
	ConnectionDetails []ConnectionDetails `json:"connectionDetails"`
	NextPageToken     *string             `json:"nextPageToken"`
	Unreachable       []string            `json:"unreachable"`
}
