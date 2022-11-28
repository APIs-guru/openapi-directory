package shared

// KafkaClusterClientAuthenticationDescription
// The client authentication information used in order to authenticate with the Apache Kafka cluster.
type KafkaClusterClientAuthenticationDescription struct {
	AuthenticationType *KafkaClusterClientAuthenticationTypeEnum `json:"authenticationType,omitempty"`
}
