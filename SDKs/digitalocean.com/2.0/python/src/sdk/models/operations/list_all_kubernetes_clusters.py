from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ListAllKubernetesClustersQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class ListAllKubernetesClustersRequest:
    query_params: ListAllKubernetesClustersQueryParams = field(default=None)
    
class ListAllKubernetesClusters200ApplicationJSONKubernetesClustersMaintenancePolicyDayEnum(str, Enum):
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
class ListAllKubernetesClusters200ApplicationJSONKubernetesClustersMaintenancePolicy:
    day: Optional[ListAllKubernetesClusters200ApplicationJSONKubernetesClustersMaintenancePolicyDayEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'day' }})
    duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_time' }})
    
class ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePoolsNodesStatusStateEnum(str, Enum):
    PROVISIONING = "provisioning"
    RUNNING = "running"
    DRAINING = "draining"
    DELETING = "deleting"


@dataclass_json
@dataclass
class ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePoolsNodesStatus:
    state: Optional[ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePoolsNodesStatusStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    

@dataclass_json
@dataclass
class ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePoolsNodes:
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    droplet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'droplet_id' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    status: Optional[ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePoolsNodesStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
class ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePoolsTaintsEffectEnum(str, Enum):
    NO_SCHEDULE = "NoSchedule"
    PREFER_NO_SCHEDULE = "PreferNoSchedule"
    NO_EXECUTE = "NoExecute"


@dataclass_json
@dataclass
class ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePoolsTaints:
    effect: Optional[ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePoolsTaintsEffectEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'effect' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePools:
    auto_scale: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auto_scale' }})
    count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    labels: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    max_nodes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max_nodes' }})
    min_nodes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'min_nodes' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    nodes: Optional[List[ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePoolsNodes]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodes' }})
    size: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    taints: Optional[List[ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePoolsTaints]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taints' }})
    
class ListAllKubernetesClusters200ApplicationJSONKubernetesClustersStatusStateEnum(str, Enum):
    RUNNING = "running"
    PROVISIONING = "provisioning"
    DEGRADED = "degraded"
    ERROR = "error"
    DELETED = "deleted"
    UPGRADING = "upgrading"
    DELETING = "deleting"


@dataclass_json
@dataclass
class ListAllKubernetesClusters200ApplicationJSONKubernetesClustersStatus:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    state: Optional[ListAllKubernetesClusters200ApplicationJSONKubernetesClustersStatusStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    

@dataclass_json
@dataclass
class ListAllKubernetesClusters200ApplicationJSONKubernetesClusters:
    auto_upgrade: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auto_upgrade' }})
    cluster_subnet: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cluster_subnet' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endpoint' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    ipv4: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipv4' }})
    maintenance_policy: Optional[ListAllKubernetesClusters200ApplicationJSONKubernetesClustersMaintenancePolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maintenance_policy' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    node_pools: List[ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePools] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_pools' }})
    region: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    registry_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registry_enabled' }})
    service_subnet: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service_subnet' }})
    status: Optional[ListAllKubernetesClusters200ApplicationJSONKubernetesClustersStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    surge_upgrade: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'surge_upgrade' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    vpc_uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vpc_uuid' }})
    

@dataclass_json
@dataclass
class ListAllKubernetesClusters200ApplicationJSONLinksPages1:
    last: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last' }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    

@dataclass_json
@dataclass
class ListAllKubernetesClusters200ApplicationJSONLinksPages2:
    first: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first' }})
    prev: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prev' }})
    

@dataclass_json
@dataclass
class ListAllKubernetesClusters200ApplicationJSONLinks:
    pages: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    

@dataclass_json
@dataclass
class ListAllKubernetesClusters200ApplicationJSONMeta:
    total: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass_json
@dataclass
class ListAllKubernetesClusters200ApplicationJSON:
    kubernetes_clusters: Optional[List[ListAllKubernetesClusters200ApplicationJSONKubernetesClusters]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kubernetes_clusters' }})
    links: Optional[ListAllKubernetesClusters200ApplicationJSONLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    meta: ListAllKubernetesClusters200ApplicationJSONMeta = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass_json
@dataclass
class ListAllKubernetesClusters401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class ListAllKubernetesClustersResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    list_all_kubernetes_clusters_200_application_json_object: Optional[ListAllKubernetesClusters200ApplicationJSON] = field(default=None)
    list_all_kubernetes_clusters_401_application_json_object: Optional[ListAllKubernetesClusters401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
