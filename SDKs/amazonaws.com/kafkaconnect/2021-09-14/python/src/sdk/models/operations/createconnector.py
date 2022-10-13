from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateConnectorHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class CreateConnectorRequestBodyCapacity:
    auto_scaling: Optional[shared.AutoScaling] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoScaling' }})
    provisioned_capacity: Optional[shared.ProvisionedCapacity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provisionedCapacity' }})
    

@dataclass_json
@dataclass
class CreateConnectorRequestBodyKafkaCluster:
    apache_kafka_cluster: Optional[shared.ApacheKafkaCluster] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apacheKafkaCluster' }})
    

@dataclass_json
@dataclass
class CreateConnectorRequestBodyKafkaClusterClientAuthentication:
    authentication_type: Optional[shared.KafkaClusterClientAuthenticationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authenticationType' }})
    

@dataclass_json
@dataclass
class CreateConnectorRequestBodyKafkaClusterEncryptionInTransit:
    encryption_type: Optional[shared.KafkaClusterEncryptionInTransitTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptionType' }})
    

@dataclass_json
@dataclass
class CreateConnectorRequestBodyLogDelivery:
    worker_log_delivery: Optional[shared.WorkerLogDelivery] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workerLogDelivery' }})
    

@dataclass_json
@dataclass
class CreateConnectorRequestBodyWorkerConfiguration:
    revision: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revision' }})
    worker_configuration_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workerConfigurationArn' }})
    

@dataclass_json
@dataclass
class CreateConnectorRequestBody:
    capacity: CreateConnectorRequestBodyCapacity = field(default=None, metadata={'dataclasses_json': { 'field_name': 'capacity' }})
    connector_configuration: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectorConfiguration' }})
    connector_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectorDescription' }})
    connector_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectorName' }})
    kafka_cluster: CreateConnectorRequestBodyKafkaCluster = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kafkaCluster' }})
    kafka_cluster_client_authentication: CreateConnectorRequestBodyKafkaClusterClientAuthentication = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kafkaClusterClientAuthentication' }})
    kafka_cluster_encryption_in_transit: CreateConnectorRequestBodyKafkaClusterEncryptionInTransit = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kafkaClusterEncryptionInTransit' }})
    kafka_connect_version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kafkaConnectVersion' }})
    log_delivery: Optional[CreateConnectorRequestBodyLogDelivery] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logDelivery' }})
    plugins: List[shared.Plugin] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'plugins' }})
    service_execution_role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceExecutionRoleArn' }})
    worker_configuration: Optional[CreateConnectorRequestBodyWorkerConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workerConfiguration' }})
    

@dataclass
class CreateConnectorRequest:
    headers: CreateConnectorHeaders = field(default=None)
    request: CreateConnectorRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateConnectorResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_connector_response: Optional[shared.CreateConnectorResponse] = field(default=None)
    forbidden_exception: Optional[Any] = field(default=None)
    internal_server_error_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    
