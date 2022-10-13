package shared

import (
	"time"
)

type ConnectorSummary struct {
	Capacity                         *CapacityDescription                         `json:"capacity"`
	ConnectorArn                     *string                                      `json:"connectorArn"`
	ConnectorDescription             *string                                      `json:"connectorDescription"`
	ConnectorName                    *string                                      `json:"connectorName"`
	ConnectorState                   *ConnectorStateEnum                          `json:"connectorState"`
	CreationTime                     *time.Time                                   `json:"creationTime"`
	CurrentVersion                   *string                                      `json:"currentVersion"`
	KafkaCluster                     *KafkaClusterDescription                     `json:"kafkaCluster"`
	KafkaClusterClientAuthentication *KafkaClusterClientAuthenticationDescription `json:"kafkaClusterClientAuthentication"`
	KafkaClusterEncryptionInTransit  *KafkaClusterEncryptionInTransitDescription  `json:"kafkaClusterEncryptionInTransit"`
	KafkaConnectVersion              *string                                      `json:"kafkaConnectVersion"`
	LogDelivery                      *LogDeliveryDescription                      `json:"logDelivery"`
	Plugins                          []PluginDescription                          `json:"plugins"`
	ServiceExecutionRoleArn          *string                                      `json:"serviceExecutionRoleArn"`
	WorkerConfiguration              *WorkerConfigurationDescription              `json:"workerConfiguration"`
}
