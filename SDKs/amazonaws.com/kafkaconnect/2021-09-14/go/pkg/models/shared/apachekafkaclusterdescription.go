package shared

type ApacheKafkaClusterDescription struct {
	BootstrapServers *string         `json:"bootstrapServers"`
	Vpc              *VpcDescription `json:"vpc"`
}
