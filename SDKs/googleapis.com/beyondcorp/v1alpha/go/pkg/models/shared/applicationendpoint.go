package shared

type ApplicationEndpoint struct {
	Host *string `json:"host"`
	Port *int32  `json:"port"`
}
