package shared

// ApacheKafkaClusterDescription
// The description of the Apache Kafka cluster to which the connector is connected.
type ApacheKafkaClusterDescription struct {
	BootstrapServers *string         `json:"bootstrapServers,omitempty"`
	Vpc              *VpcDescription `json:"vpc,omitempty"`
}
