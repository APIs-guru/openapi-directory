from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json

class Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesNodePoolsItemsNodesStatusStateEnum(str, Enum):
    PROVISIONING = "provisioning"
    RUNNING = "running"
    DRAINING = "draining"
    DELETING = "deleting"


@dataclass_json
@dataclass
class Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesNodePoolsItemsNodesStatus:
    state: Optional[Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesNodePoolsItemsNodesStatusStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    

@dataclass_json
@dataclass
class Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesNodePoolsItemsNodes:
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    droplet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'droplet_id' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    status: Optional[Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesNodePoolsItemsNodesStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
class Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesNodePoolsItemsTaintsEffectEnum(str, Enum):
    NO_SCHEDULE = "NoSchedule"
    PREFER_NO_SCHEDULE = "PreferNoSchedule"
    NO_EXECUTE = "NoExecute"


@dataclass_json
@dataclass
class Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesNodePoolsItemsTaints:
    effect: Optional[Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesNodePoolsItemsTaintsEffectEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'effect' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesNodePoolsItems:
    auto_scale: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auto_scale' }})
    count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    labels: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    max_nodes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max_nodes' }})
    min_nodes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'min_nodes' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    nodes: Optional[List[Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesNodePoolsItemsNodes]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodes' }})
    size: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    taints: Optional[List[Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesNodePoolsItemsTaints]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taints' }})
    
