from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateMonitorPathParams:
    monitor_uid: str = field(default=None, metadata={'path_param': { 'field_name': 'monitor_uid', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateMonitorRequestBodyMonitorSchedule:
    cron: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cron' }})
    timezone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timezone' }})
    

@dataclass_json
@dataclass
class UpdateMonitorRequestBodyMonitor:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    schedule: Optional[UpdateMonitorRequestBodyMonitorSchedule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schedule' }})
    

@dataclass_json
@dataclass
class UpdateMonitorRequestBody:
    monitor: Optional[UpdateMonitorRequestBodyMonitor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'monitor' }})
    

@dataclass
class UpdateMonitorRequest:
    path_params: UpdateMonitorPathParams = field(default=None)
    request: Optional[UpdateMonitorRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class UpdateMonitor200ApplicationJSONMonitor:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uid' }})
    

@dataclass_json
@dataclass
class UpdateMonitor200ApplicationJSON:
    monitor: Optional[UpdateMonitor200ApplicationJSONMonitor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'monitor' }})
    

@dataclass
class UpdateMonitorResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_monitor_200_application_json_object: Optional[UpdateMonitor200ApplicationJSON] = field(default=None)
    
