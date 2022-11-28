package shared

// ApacheKafkaCluster
// The details of the Apache Kafka cluster to which the connector is connected.
type ApacheKafkaCluster struct {
	BootstrapServers string `json:"bootstrapServers"`
	Vpc              Vpc    `json:"vpc"`
}
