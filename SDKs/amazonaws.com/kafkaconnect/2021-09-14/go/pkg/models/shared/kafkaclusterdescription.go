package shared

// KafkaClusterDescription
// Details of how to connect to the Apache Kafka cluster.
type KafkaClusterDescription struct {
	ApacheKafkaCluster *ApacheKafkaClusterDescription `json:"apacheKafkaCluster,omitempty"`
}
