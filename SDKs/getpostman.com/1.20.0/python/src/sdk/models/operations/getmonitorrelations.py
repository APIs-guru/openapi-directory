from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetMonitorRelationsPathParams:
    api_id: str = field(metadata={'path_param': { 'field_name': 'apiId', 'style': 'simple', 'explode': False }})
    api_version_id: str = field(metadata={'path_param': { 'field_name': 'apiVersionId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GetMonitorRelations200ApplicationJSONMonitor:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    monitor_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monitorId') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedAt') }})
    

@dataclass_json
@dataclass
class GetMonitorRelations200ApplicationJSON:
    monitor: Optional[List[GetMonitorRelations200ApplicationJSONMonitor]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monitor') }})
    

@dataclass
class GetMonitorRelationsRequest:
    path_params: GetMonitorRelationsPathParams = field()
    

@dataclass
class GetMonitorRelationsResponse:
    content_type: str = field()
    status_code: int = field()
    get_monitor_relations_200_application_json_object: Optional[GetMonitorRelations200ApplicationJSON] = field(default=None)
    
