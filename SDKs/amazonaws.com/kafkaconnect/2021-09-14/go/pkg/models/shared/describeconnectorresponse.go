package shared

import (
"time")

type DescribeConnectorResponse struct {
    Capacity *CapacityDescription `json:"capacity,omitempty"`
    ConnectorArn *string `json:"connectorArn,omitempty"`
    ConnectorConfiguration map[string]string `json:"connectorConfiguration,omitempty"`
    ConnectorDescription *string `json:"connectorDescription,omitempty"`
    ConnectorName *string `json:"connectorName,omitempty"`
    ConnectorState *ConnectorStateEnum `json:"connectorState,omitempty"`
    CreationTime *time.Time `json:"creationTime,omitempty"`
    CurrentVersion *string `json:"currentVersion,omitempty"`
    KafkaCluster *KafkaClusterDescription `json:"kafkaCluster,omitempty"`
    KafkaClusterClientAuthentication *KafkaClusterClientAuthenticationDescription `json:"kafkaClusterClientAuthentication,omitempty"`
    KafkaClusterEncryptionInTransit *KafkaClusterEncryptionInTransitDescription `json:"kafkaClusterEncryptionInTransit,omitempty"`
    KafkaConnectVersion *string `json:"kafkaConnectVersion,omitempty"`
    LogDelivery *LogDeliveryDescription `json:"logDelivery,omitempty"`
    Plugins []PluginDescription `json:"plugins,omitempty"`
    ServiceExecutionRoleArn *string `json:"serviceExecutionRoleArn,omitempty"`
    WorkerConfiguration *WorkerConfigurationDescription `json:"workerConfiguration,omitempty"`
    
}

