from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateMonitorRequestBodyMonitorSchedule:
    cron: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cron' }})
    timezone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timezone' }})
    

@dataclass_json
@dataclass
class CreateMonitorRequestBodyMonitor:
    collection: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collection' }})
    environment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    schedule: Optional[CreateMonitorRequestBodyMonitorSchedule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schedule' }})
    

@dataclass_json
@dataclass
class CreateMonitorRequestBody:
    monitor: Optional[CreateMonitorRequestBodyMonitor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'monitor' }})
    

@dataclass
class CreateMonitorRequest:
    request: Optional[CreateMonitorRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class CreateMonitor200ApplicationJSONMonitor:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uid' }})
    

@dataclass_json
@dataclass
class CreateMonitor200ApplicationJSON:
    monitor: Optional[CreateMonitor200ApplicationJSONMonitor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'monitor' }})
    

@dataclass_json
@dataclass
class CreateMonitor400ApplicationJSONErrorDetails:
    param: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'param' }})
    

@dataclass_json
@dataclass
class CreateMonitor400ApplicationJSONError:
    details: Optional[CreateMonitor400ApplicationJSONErrorDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'details' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class CreateMonitor400ApplicationJSON:
    error: Optional[CreateMonitor400ApplicationJSONError] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    

@dataclass
class CreateMonitorResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    create_monitor_200_application_json_object: Optional[CreateMonitor200ApplicationJSON] = field(default=None)
    create_monitor_400_application_json_object: Optional[CreateMonitor400ApplicationJSON] = field(default=None)
    
