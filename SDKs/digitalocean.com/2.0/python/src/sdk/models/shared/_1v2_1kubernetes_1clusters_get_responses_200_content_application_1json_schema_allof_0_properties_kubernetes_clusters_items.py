from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json

class Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsMaintenancePolicyDayEnum(str, Enum):
    ANY = "any"
    MONDAY = "monday"
    TUESDAY = "tuesday"
    WEDNESDAY = "wednesday"
    THURSDAY = "thursday"
    FRIDAY = "friday"
    SATURDAY = "saturday"
    SUNDAY = "sunday"


@dataclass_json
@dataclass
class Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsMaintenancePolicy:
    day: Optional[Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsMaintenancePolicyDayEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'day' }})
    duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_time' }})
    
class Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsNodesStatusStateEnum(str, Enum):
    PROVISIONING = "provisioning"
    RUNNING = "running"
    DRAINING = "draining"
    DELETING = "deleting"


@dataclass_json
@dataclass
class Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsNodesStatus:
    state: Optional[Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsNodesStatusStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    

@dataclass_json
@dataclass
class Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsNodes:
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    droplet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'droplet_id' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    status: Optional[Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsNodesStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
class Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsTaintsEffectEnum(str, Enum):
    NO_SCHEDULE = "NoSchedule"
    PREFER_NO_SCHEDULE = "PreferNoSchedule"
    NO_EXECUTE = "NoExecute"


@dataclass_json
@dataclass
class Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsTaints:
    effect: Optional[Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsTaintsEffectEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'effect' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePools:
    auto_scale: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auto_scale' }})
    count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    labels: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    max_nodes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max_nodes' }})
    min_nodes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'min_nodes' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    nodes: Optional[List[Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsNodes]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodes' }})
    size: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    taints: Optional[List[Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsTaints]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taints' }})
    
class Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsStatusStateEnum(str, Enum):
    RUNNING = "running"
    PROVISIONING = "provisioning"
    DEGRADED = "degraded"
    ERROR = "error"
    DELETED = "deleted"
    UPGRADING = "upgrading"
    DELETING = "deleting"


@dataclass_json
@dataclass
class Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsStatus:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    state: Optional[Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsStatusStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    

@dataclass_json
@dataclass
class Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItems:
    auto_upgrade: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auto_upgrade' }})
    cluster_subnet: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cluster_subnet' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endpoint' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    ipv4: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipv4' }})
    maintenance_policy: Optional[Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsMaintenancePolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maintenance_policy' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    node_pools: List[Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePools] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_pools' }})
    region: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    registry_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registry_enabled' }})
    service_subnet: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service_subnet' }})
    status: Optional[Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    surge_upgrade: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'surge_upgrade' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    vpc_uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vpc_uuid' }})
    
