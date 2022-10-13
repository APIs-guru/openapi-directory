from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import capacitydescription
from . import connectorstate_enum
from . import kafkaclusterdescription
from . import kafkaclusterclientauthenticationdescription
from . import kafkaclusterencryptionintransitdescription
from . import logdeliverydescription
from . import plugindescription
from . import workerconfigurationdescription


@dataclass_json
@dataclass
class ConnectorSummary:
    capacity: Optional[capacitydescription.CapacityDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'capacity' }})
    connector_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectorArn' }})
    connector_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectorDescription' }})
    connector_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectorName' }})
    connector_state: Optional[connectorstate_enum.ConnectorStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectorState' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    current_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentVersion' }})
    kafka_cluster: Optional[kafkaclusterdescription.KafkaClusterDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kafkaCluster' }})
    kafka_cluster_client_authentication: Optional[kafkaclusterclientauthenticationdescription.KafkaClusterClientAuthenticationDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kafkaClusterClientAuthentication' }})
    kafka_cluster_encryption_in_transit: Optional[kafkaclusterencryptionintransitdescription.KafkaClusterEncryptionInTransitDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kafkaClusterEncryptionInTransit' }})
    kafka_connect_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kafkaConnectVersion' }})
    log_delivery: Optional[logdeliverydescription.LogDeliveryDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logDelivery' }})
    plugins: Optional[List[plugindescription.PluginDescription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'plugins' }})
    service_execution_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceExecutionRoleArn' }})
    worker_configuration: Optional[workerconfigurationdescription.WorkerConfigurationDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workerConfiguration' }})
    
