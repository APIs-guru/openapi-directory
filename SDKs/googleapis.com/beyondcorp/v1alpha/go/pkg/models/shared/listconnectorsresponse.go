package shared

type ListConnectorsResponse struct {
	Connectors    []Connector `json:"connectors"`
	NextPageToken *string     `json:"nextPageToken"`
	Unreachable   []string    `json:"unreachable"`
}
