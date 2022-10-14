package shared

type ApplicationEndpoint struct {
	Host *string `json:"host,omitempty"`
	Port *int32  `json:"port,omitempty"`
}
