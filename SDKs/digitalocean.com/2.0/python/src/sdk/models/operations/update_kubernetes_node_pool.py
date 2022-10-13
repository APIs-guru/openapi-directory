from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateKubernetesNodePoolPathParams:
    cluster_id: str = field(default=None, metadata={'path_param': { 'field_name': 'cluster_id', 'style': 'simple', 'explode': False }})
    node_pool_id: str = field(default=None, metadata={'path_param': { 'field_name': 'node_pool_id', 'style': 'simple', 'explode': False }})
    
class UpdateKubernetesNodePoolRequestBodyNodesStatusStateEnum(str, Enum):
    PROVISIONING = "provisioning"
    RUNNING = "running"
    DRAINING = "draining"
    DELETING = "deleting"


@dataclass_json
@dataclass
class UpdateKubernetesNodePoolRequestBodyNodesStatus:
    state: Optional[UpdateKubernetesNodePoolRequestBodyNodesStatusStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    

@dataclass_json
@dataclass
class UpdateKubernetesNodePoolRequestBodyNodes:
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    droplet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'droplet_id' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    status: Optional[UpdateKubernetesNodePoolRequestBodyNodesStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
class UpdateKubernetesNodePoolRequestBodyTaintsEffectEnum(str, Enum):
    NO_SCHEDULE = "NoSchedule"
    PREFER_NO_SCHEDULE = "PreferNoSchedule"
    NO_EXECUTE = "NoExecute"


@dataclass_json
@dataclass
class UpdateKubernetesNodePoolRequestBodyTaints:
    effect: Optional[UpdateKubernetesNodePoolRequestBodyTaintsEffectEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'effect' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class UpdateKubernetesNodePoolRequestBody:
    auto_scale: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auto_scale' }})
    count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    labels: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    max_nodes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max_nodes' }})
    min_nodes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'min_nodes' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    nodes: Optional[List[UpdateKubernetesNodePoolRequestBodyNodes]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodes' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    taints: Optional[List[UpdateKubernetesNodePoolRequestBodyTaints]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taints' }})
    

@dataclass
class UpdateKubernetesNodePoolRequest:
    path_params: UpdateKubernetesNodePoolPathParams = field(default=None)
    request: UpdateKubernetesNodePoolRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class UpdateKubernetesNodePool401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class UpdateKubernetesNodePoolResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    update_kubernetes_node_pool_202_application_json_any: Optional[Any] = field(default=None)
    update_kubernetes_node_pool_401_application_json_object: Optional[UpdateKubernetesNodePool401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
