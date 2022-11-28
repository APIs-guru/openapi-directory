from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateConnectorHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateConnectorRequestBodyCapacity:
    r"""CreateConnectorRequestBodyCapacity
    Information about the capacity of the connector, whether it is auto scaled or provisioned.
    """
    
    auto_scaling: Optional[shared.AutoScaling] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoScaling') }})
    provisioned_capacity: Optional[shared.ProvisionedCapacity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provisionedCapacity') }})
    

@dataclass_json
@dataclass
class CreateConnectorRequestBodyKafkaCluster:
    r"""CreateConnectorRequestBodyKafkaCluster
    The details of the Apache Kafka cluster to which the connector is connected.
    """
    
    apache_kafka_cluster: Optional[shared.ApacheKafkaCluster] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apacheKafkaCluster') }})
    

@dataclass_json
@dataclass
class CreateConnectorRequestBodyKafkaClusterClientAuthentication:
    r"""CreateConnectorRequestBodyKafkaClusterClientAuthentication
    The client authentication information used in order to authenticate with the Apache Kafka cluster.
    """
    
    authentication_type: Optional[shared.KafkaClusterClientAuthenticationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authenticationType') }})
    

@dataclass_json
@dataclass
class CreateConnectorRequestBodyKafkaClusterEncryptionInTransit:
    r"""CreateConnectorRequestBodyKafkaClusterEncryptionInTransit
    Details of encryption in transit to the Apache Kafka cluster.
    """
    
    encryption_type: Optional[shared.KafkaClusterEncryptionInTransitTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionType') }})
    

@dataclass_json
@dataclass
class CreateConnectorRequestBodyLogDelivery:
    r"""CreateConnectorRequestBodyLogDelivery
    Details about log delivery.
    """
    
    worker_log_delivery: Optional[shared.WorkerLogDelivery] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerLogDelivery') }})
    

@dataclass_json
@dataclass
class CreateConnectorRequestBodyWorkerConfiguration:
    r"""CreateConnectorRequestBodyWorkerConfiguration
    The configuration of the workers, which are the processes that run the connector logic.
    """
    
    revision: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revision') }})
    worker_configuration_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerConfigurationArn') }})
    

@dataclass_json
@dataclass
class CreateConnectorRequestBody:
    capacity: CreateConnectorRequestBodyCapacity = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('capacity') }})
    connector_configuration: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorConfiguration') }})
    connector_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorName') }})
    kafka_cluster: CreateConnectorRequestBodyKafkaCluster = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('kafkaCluster') }})
    kafka_cluster_client_authentication: CreateConnectorRequestBodyKafkaClusterClientAuthentication = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('kafkaClusterClientAuthentication') }})
    kafka_cluster_encryption_in_transit: CreateConnectorRequestBodyKafkaClusterEncryptionInTransit = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('kafkaClusterEncryptionInTransit') }})
    kafka_connect_version: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('kafkaConnectVersion') }})
    plugins: List[shared.Plugin] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('plugins') }})
    service_execution_role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceExecutionRoleArn') }})
    connector_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorDescription') }})
    log_delivery: Optional[CreateConnectorRequestBodyLogDelivery] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logDelivery') }})
    worker_configuration: Optional[CreateConnectorRequestBodyWorkerConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerConfiguration') }})
    

@dataclass
class CreateConnectorRequest:
    headers: CreateConnectorHeaders = field()
    request: CreateConnectorRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateConnectorResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    create_connector_response: Optional[shared.CreateConnectorResponse] = field(default=None)
    forbidden_exception: Optional[Any] = field(default=None)
    internal_server_error_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    
