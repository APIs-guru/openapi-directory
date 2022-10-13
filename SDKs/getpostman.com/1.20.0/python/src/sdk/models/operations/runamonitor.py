from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass
class RunAMonitorPathParams:
    monitor_uid: str = field(default=None, metadata={'path_param': { 'field_name': 'monitor_uid', 'style': 'simple', 'explode': False }})
    

@dataclass
class RunAMonitorRequest:
    path_params: RunAMonitorPathParams = field(default=None)
    

@dataclass_json
@dataclass
class RunAMonitor200ApplicationJSONRunExecutionsItem:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class RunAMonitor200ApplicationJSONRunExecutionsRequestBody:
    content_length: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentLength' }})
    mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mode' }})
    

@dataclass_json
@dataclass
class RunAMonitor200ApplicationJSONRunExecutionsRequestHeaders:
    accept: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accept' }})
    accept_encoding: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accept-encoding' }})
    content_length: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content-length' }})
    content_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content-type' }})
    

@dataclass_json
@dataclass
class RunAMonitor200ApplicationJSONRunExecutionsRequest:
    body: Optional[RunAMonitor200ApplicationJSONRunExecutionsRequestBody] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    headers: Optional[RunAMonitor200ApplicationJSONRunExecutionsRequestHeaders] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headers' }})
    method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'method' }})
    timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class RunAMonitor200ApplicationJSONRunExecutionsResponseBody:
    content_length: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentLength' }})
    

@dataclass_json
@dataclass
class RunAMonitor200ApplicationJSONRunExecutionsResponseHeaders:
    connection: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connection' }})
    content_encoding: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content-encoding' }})
    content_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content-type' }})
    date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date' }})
    transfer_encoding: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transfer-encoding' }})
    

@dataclass_json
@dataclass
class RunAMonitor200ApplicationJSONRunExecutionsResponse:
    body: Optional[RunAMonitor200ApplicationJSONRunExecutionsResponseBody] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    code: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    headers: Optional[RunAMonitor200ApplicationJSONRunExecutionsResponseHeaders] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headers' }})
    response_size: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseSize' }})
    response_time: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseTime' }})
    

@dataclass_json
@dataclass
class RunAMonitor200ApplicationJSONRunExecutions:
    id: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    item: Optional[RunAMonitor200ApplicationJSONRunExecutionsItem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'item' }})
    request: Optional[RunAMonitor200ApplicationJSONRunExecutionsRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request' }})
    response: Optional[RunAMonitor200ApplicationJSONRunExecutionsResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'response' }})
    

@dataclass_json
@dataclass
class RunAMonitor200ApplicationJSONRunFailuresAssertion:
    status_code_is_400: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status code is 400' }})
    

@dataclass_json
@dataclass
class RunAMonitor200ApplicationJSONRunFailures:
    assertion: Optional[RunAMonitor200ApplicationJSONRunFailuresAssertion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assertion' }})
    execution_id: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionId' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class RunAMonitor200ApplicationJSONRunInfo:
    collection_uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collectionUid' }})
    finished_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'finishedAt' }})
    job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobId' }})
    monitor_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'monitorId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    started_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startedAt' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class RunAMonitor200ApplicationJSONRunStatsAssertions:
    failed: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failed' }})
    total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass_json
@dataclass
class RunAMonitor200ApplicationJSONRunStatsRequests:
    failed: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failed' }})
    total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass_json
@dataclass
class RunAMonitor200ApplicationJSONRunStats:
    assertions: Optional[RunAMonitor200ApplicationJSONRunStatsAssertions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assertions' }})
    requests: Optional[RunAMonitor200ApplicationJSONRunStatsRequests] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requests' }})
    

@dataclass_json
@dataclass
class RunAMonitor200ApplicationJSONRun:
    executions: Optional[List[RunAMonitor200ApplicationJSONRunExecutions]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executions' }})
    failures: Optional[List[RunAMonitor200ApplicationJSONRunFailures]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failures' }})
    info: Optional[RunAMonitor200ApplicationJSONRunInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'info' }})
    stats: Optional[RunAMonitor200ApplicationJSONRunStats] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stats' }})
    

@dataclass_json
@dataclass
class RunAMonitor200ApplicationJSON:
    run: Optional[RunAMonitor200ApplicationJSONRun] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'run' }})
    

@dataclass
class RunAMonitorResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    run_a_monitor_200_application_json_object: Optional[RunAMonitor200ApplicationJSON] = field(default=None)
    
