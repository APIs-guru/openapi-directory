from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class ListDefaultProjectResources200ApplicationJSONLinksPages1:
    last: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last' }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    

@dataclass_json
@dataclass
class ListDefaultProjectResources200ApplicationJSONLinksPages2:
    first: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first' }})
    prev: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prev' }})
    

@dataclass_json
@dataclass
class ListDefaultProjectResources200ApplicationJSONLinks:
    pages: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    

@dataclass_json
@dataclass
class ListDefaultProjectResources200ApplicationJSONMeta:
    total: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass_json
@dataclass
class ListDefaultProjectResources200ApplicationJSONResourcesLinks:
    self: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    
class ListDefaultProjectResources200ApplicationJSONResourcesStatusEnum(str, Enum):
    OK = "ok"
    NOT_FOUND = "not_found"
    ASSIGNED = "assigned"
    ALREADY_ASSIGNED = "already_assigned"
    SERVICE_DOWN = "service_down"


@dataclass_json
@dataclass
class ListDefaultProjectResources200ApplicationJSONResources:
    assigned_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assigned_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    links: Optional[ListDefaultProjectResources200ApplicationJSONResourcesLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    status: Optional[ListDefaultProjectResources200ApplicationJSONResourcesStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    urn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'urn' }})
    

@dataclass_json
@dataclass
class ListDefaultProjectResources200ApplicationJSON:
    links: Optional[ListDefaultProjectResources200ApplicationJSONLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    meta: ListDefaultProjectResources200ApplicationJSONMeta = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    resources: Optional[List[ListDefaultProjectResources200ApplicationJSONResources]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    

@dataclass_json
@dataclass
class ListDefaultProjectResources401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class ListDefaultProjectResourcesResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    list_default_project_resources_200_application_json_object: Optional[ListDefaultProjectResources200ApplicationJSON] = field(default=None)
    list_default_project_resources_401_application_json_object: Optional[ListDefaultProjectResources401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
