package shared

type ListClientConnectorServicesResponse struct {
	ClientConnectorServices []ClientConnectorService `json:"clientConnectorServices,omitempty"`
	NextPageToken           *string                  `json:"nextPageToken,omitempty"`
	Unreachable             []string                 `json:"unreachable,omitempty"`
}
