package shared

// KafkaClusterEncryptionInTransitDescription
// The description of the encryption in transit to the Apache Kafka cluster.
type KafkaClusterEncryptionInTransitDescription struct {
	EncryptionType *KafkaClusterEncryptionInTransitTypeEnum `json:"encryptionType,omitempty"`
}
