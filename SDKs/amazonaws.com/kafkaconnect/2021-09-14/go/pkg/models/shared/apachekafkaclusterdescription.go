package shared

type ApacheKafkaClusterDescription struct {
	BootstrapServers *string         `json:"bootstrapServers,omitempty"`
	Vpc              *VpcDescription `json:"vpc,omitempty"`
}
