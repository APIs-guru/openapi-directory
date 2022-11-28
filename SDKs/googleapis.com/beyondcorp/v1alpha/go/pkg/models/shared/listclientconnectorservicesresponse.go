package shared

// ListClientConnectorServicesResponse
// Message for response to listing ClientConnectorServices.
type ListClientConnectorServicesResponse struct {
	ClientConnectorServices []ClientConnectorService `json:"clientConnectorServices,omitempty"`
	NextPageToken           *string                  `json:"nextPageToken,omitempty"`
	Unreachable             []string                 `json:"unreachable,omitempty"`
}
