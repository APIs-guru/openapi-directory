package shared

type ListClientConnectorServicesResponse struct {
	ClientConnectorServices []ClientConnectorService `json:"clientConnectorServices"`
	NextPageToken           *string                  `json:"nextPageToken"`
	Unreachable             []string                 `json:"unreachable"`
}
