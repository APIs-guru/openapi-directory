package shared

type ApacheKafkaCluster struct {
	BootstrapServers string `json:"bootstrapServers"`
	Vpc              Vpc    `json:"vpc"`
}
