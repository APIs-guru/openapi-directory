from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class DeleteMonitorPathParams:
    monitor_uid: str = field(default=None, metadata={'path_param': { 'field_name': 'monitor_uid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteMonitorRequest:
    path_params: DeleteMonitorPathParams = field(default=None)
    

@dataclass_json
@dataclass
class DeleteMonitor200ApplicationJSONMonitor:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uid' }})
    

@dataclass_json
@dataclass
class DeleteMonitor200ApplicationJSON:
    monitor: Optional[DeleteMonitor200ApplicationJSONMonitor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'monitor' }})
    

@dataclass_json
@dataclass
class DeleteMonitor404ApplicationJSONError:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class DeleteMonitor404ApplicationJSON:
    error: Optional[DeleteMonitor404ApplicationJSONError] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    

@dataclass
class DeleteMonitorResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    delete_monitor_200_application_json_object: Optional[DeleteMonitor200ApplicationJSON] = field(default=None)
    delete_monitor_404_application_json_object: Optional[DeleteMonitor404ApplicationJSON] = field(default=None)
    
