from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetMonitorRelationsPathParams:
    api_id: str = field(default=None, metadata={'path_param': { 'field_name': 'apiId', 'style': 'simple', 'explode': False }})
    api_version_id: str = field(default=None, metadata={'path_param': { 'field_name': 'apiVersionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMonitorRelationsRequest:
    path_params: GetMonitorRelationsPathParams = field(default=None)
    

@dataclass_json
@dataclass
class GetMonitorRelations200ApplicationJSONMonitor:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    monitor_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'monitorId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedAt' }})
    

@dataclass_json
@dataclass
class GetMonitorRelations200ApplicationJSON:
    monitor: Optional[List[GetMonitorRelations200ApplicationJSONMonitor]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'monitor' }})
    

@dataclass
class GetMonitorRelationsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_monitor_relations_200_application_json_object: Optional[GetMonitorRelations200ApplicationJSON] = field(default=None)
    
