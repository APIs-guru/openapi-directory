from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class SingleMonitorPathParams:
    monitor_uid: str = field(default=None, metadata={'path_param': { 'field_name': 'monitor_uid', 'style': 'simple', 'explode': False }})
    

@dataclass
class SingleMonitorRequest:
    path_params: SingleMonitorPathParams = field(default=None)
    

@dataclass_json
@dataclass
class SingleMonitor200ApplicationJSONMonitorLastRunStatsAssertions:
    failed: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failed' }})
    total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass_json
@dataclass
class SingleMonitor200ApplicationJSONMonitorLastRunStatsRequests:
    total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass_json
@dataclass
class SingleMonitor200ApplicationJSONMonitorLastRunStats:
    assertions: Optional[SingleMonitor200ApplicationJSONMonitorLastRunStatsAssertions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assertions' }})
    requests: Optional[SingleMonitor200ApplicationJSONMonitorLastRunStatsRequests] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requests' }})
    

@dataclass_json
@dataclass
class SingleMonitor200ApplicationJSONMonitorLastRun:
    finished_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'finishedAt' }})
    started_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startedAt' }})
    stats: Optional[SingleMonitor200ApplicationJSONMonitorLastRunStats] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stats' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class SingleMonitor200ApplicationJSONMonitorNotificationsOnError:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    

@dataclass_json
@dataclass
class SingleMonitor200ApplicationJSONMonitorNotificationsOnFailure:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    

@dataclass_json
@dataclass
class SingleMonitor200ApplicationJSONMonitorNotifications:
    on_error: Optional[List[SingleMonitor200ApplicationJSONMonitorNotificationsOnError]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'onError' }})
    on_failure: Optional[List[SingleMonitor200ApplicationJSONMonitorNotificationsOnFailure]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'onFailure' }})
    

@dataclass_json
@dataclass
class SingleMonitor200ApplicationJSONMonitorOptions:
    follow_redirects: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'followRedirects' }})
    request_delay: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestDelay' }})
    request_timeout: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestTimeout' }})
    strict_ssl: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'strictSSL' }})
    

@dataclass_json
@dataclass
class SingleMonitor200ApplicationJSONMonitorSchedule:
    cron: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cron' }})
    next_run: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextRun' }})
    timezone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timezone' }})
    

@dataclass_json
@dataclass
class SingleMonitor200ApplicationJSONMonitor:
    collection_uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collectionUid' }})
    distribution: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distribution' }})
    environment_uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environmentUid' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_run: Optional[SingleMonitor200ApplicationJSONMonitorLastRun] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastRun' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    notifications: Optional[SingleMonitor200ApplicationJSONMonitorNotifications] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notifications' }})
    options: Optional[SingleMonitor200ApplicationJSONMonitorOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owner' }})
    schedule: Optional[SingleMonitor200ApplicationJSONMonitorSchedule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schedule' }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uid' }})
    

@dataclass_json
@dataclass
class SingleMonitor200ApplicationJSON:
    monitor: Optional[SingleMonitor200ApplicationJSONMonitor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'monitor' }})
    

@dataclass_json
@dataclass
class SingleMonitor404ApplicationJSONError:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class SingleMonitor404ApplicationJSON:
    error: Optional[SingleMonitor404ApplicationJSONError] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    

@dataclass
class SingleMonitorResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    single_monitor_200_application_json_object: Optional[SingleMonitor200ApplicationJSON] = field(default=None)
    single_monitor_404_application_json_object: Optional[SingleMonitor404ApplicationJSON] = field(default=None)
    
