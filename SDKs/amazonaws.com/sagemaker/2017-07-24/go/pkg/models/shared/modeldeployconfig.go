package shared

type ModelDeployConfig struct {
	AutoGenerateEndpointName *bool   `json:"AutoGenerateEndpointName"`
	EndpointName             *string `json:"EndpointName"`
}
