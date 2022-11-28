package operations

import (
	"openapi/pkg/models/shared"
)

type CreateConnectorHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// CreateConnectorRequestBodyCapacity
// Information about the capacity of the connector, whether it is auto scaled or provisioned.
type CreateConnectorRequestBodyCapacity struct {
	AutoScaling         *shared.AutoScaling         `json:"autoScaling,omitempty"`
	ProvisionedCapacity *shared.ProvisionedCapacity `json:"provisionedCapacity,omitempty"`
}

// CreateConnectorRequestBodyKafkaCluster
// The details of the Apache Kafka cluster to which the connector is connected.
type CreateConnectorRequestBodyKafkaCluster struct {
	ApacheKafkaCluster *shared.ApacheKafkaCluster `json:"apacheKafkaCluster,omitempty"`
}

// CreateConnectorRequestBodyKafkaClusterClientAuthentication
// The client authentication information used in order to authenticate with the Apache Kafka cluster.
type CreateConnectorRequestBodyKafkaClusterClientAuthentication struct {
	AuthenticationType *shared.KafkaClusterClientAuthenticationTypeEnum `json:"authenticationType,omitempty"`
}

// CreateConnectorRequestBodyKafkaClusterEncryptionInTransit
// Details of encryption in transit to the Apache Kafka cluster.
type CreateConnectorRequestBodyKafkaClusterEncryptionInTransit struct {
	EncryptionType *shared.KafkaClusterEncryptionInTransitTypeEnum `json:"encryptionType,omitempty"`
}

// CreateConnectorRequestBodyLogDelivery
// Details about log delivery.
type CreateConnectorRequestBodyLogDelivery struct {
	WorkerLogDelivery *shared.WorkerLogDelivery `json:"workerLogDelivery,omitempty"`
}

// CreateConnectorRequestBodyWorkerConfiguration
// The configuration of the workers, which are the processes that run the connector logic.
type CreateConnectorRequestBodyWorkerConfiguration struct {
	Revision               *int64  `json:"revision,omitempty"`
	WorkerConfigurationArn *string `json:"workerConfigurationArn,omitempty"`
}

type CreateConnectorRequestBody struct {
	Capacity                         CreateConnectorRequestBodyCapacity                         `json:"capacity"`
	ConnectorConfiguration           map[string]string                                          `json:"connectorConfiguration"`
	ConnectorDescription             *string                                                    `json:"connectorDescription,omitempty"`
	ConnectorName                    string                                                     `json:"connectorName"`
	KafkaCluster                     CreateConnectorRequestBodyKafkaCluster                     `json:"kafkaCluster"`
	KafkaClusterClientAuthentication CreateConnectorRequestBodyKafkaClusterClientAuthentication `json:"kafkaClusterClientAuthentication"`
	KafkaClusterEncryptionInTransit  CreateConnectorRequestBodyKafkaClusterEncryptionInTransit  `json:"kafkaClusterEncryptionInTransit"`
	KafkaConnectVersion              string                                                     `json:"kafkaConnectVersion"`
	LogDelivery                      *CreateConnectorRequestBodyLogDelivery                     `json:"logDelivery,omitempty"`
	Plugins                          []shared.Plugin                                            `json:"plugins"`
	ServiceExecutionRoleArn          string                                                     `json:"serviceExecutionRoleArn"`
	WorkerConfiguration              *CreateConnectorRequestBodyWorkerConfiguration             `json:"workerConfiguration,omitempty"`
}

type CreateConnectorRequest struct {
	Headers CreateConnectorHeaders
	Request CreateConnectorRequestBody `request:"mediaType=application/json"`
}

type CreateConnectorResponse struct {
	BadRequestException          *interface{}
	ConflictException            *interface{}
	ContentType                  string
	CreateConnectorResponse      *shared.CreateConnectorResponse
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	NotFoundException            *interface{}
	ServiceUnavailableException  *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
	UnauthorizedException        *interface{}
}
