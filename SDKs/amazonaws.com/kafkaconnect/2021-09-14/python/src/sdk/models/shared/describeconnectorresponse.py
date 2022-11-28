from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeConnectorResponse:
    capacity: Optional[CapacityDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('capacity') }})
    connector_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorArn') }})
    connector_configuration: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorConfiguration') }})
    connector_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorDescription') }})
    connector_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorName') }})
    connector_state: Optional[ConnectorStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorState') }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    current_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentVersion') }})
    kafka_cluster: Optional[KafkaClusterDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kafkaCluster') }})
    kafka_cluster_client_authentication: Optional[KafkaClusterClientAuthenticationDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kafkaClusterClientAuthentication') }})
    kafka_cluster_encryption_in_transit: Optional[KafkaClusterEncryptionInTransitDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kafkaClusterEncryptionInTransit') }})
    kafka_connect_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kafkaConnectVersion') }})
    log_delivery: Optional[LogDeliveryDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logDelivery') }})
    plugins: Optional[List[PluginDescription]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plugins') }})
    service_execution_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceExecutionRoleArn') }})
    worker_configuration: Optional[WorkerConfigurationDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerConfiguration') }})
    
