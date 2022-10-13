from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class ListAllSnapshotsResourceTypeEnum(str, Enum):
    DROPLET = "droplet"
    VOLUME = "volume"


@dataclass
class ListAllSnapshotsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    resource_type: Optional[ListAllSnapshotsResourceTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'resource_type', 'style': 'form', 'explode': True }})
    

@dataclass
class ListAllSnapshotsRequest:
    query_params: ListAllSnapshotsQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class ListAllSnapshots200ApplicationJSONLinksPages1:
    last: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last' }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    

@dataclass_json
@dataclass
class ListAllSnapshots200ApplicationJSONLinksPages2:
    first: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first' }})
    prev: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prev' }})
    

@dataclass_json
@dataclass
class ListAllSnapshots200ApplicationJSONLinks:
    pages: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    

@dataclass_json
@dataclass
class ListAllSnapshots200ApplicationJSONMeta:
    total: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    
class ListAllSnapshots200ApplicationJSONSnapshotsResourceTypeEnum(str, Enum):
    DROPLET = "droplet"
    VOLUME = "volume"


@dataclass_json
@dataclass
class ListAllSnapshots200ApplicationJSONSnapshots:
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    min_disk_size: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'min_disk_size' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    regions: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regions' }})
    resource_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_id' }})
    resource_type: ListAllSnapshots200ApplicationJSONSnapshotsResourceTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_type' }})
    size_gigabytes: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size_gigabytes' }})
    tags: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass_json
@dataclass
class ListAllSnapshots200ApplicationJSON:
    links: Optional[ListAllSnapshots200ApplicationJSONLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    meta: ListAllSnapshots200ApplicationJSONMeta = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    snapshots: Optional[List[ListAllSnapshots200ApplicationJSONSnapshots]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snapshots' }})
    

@dataclass_json
@dataclass
class ListAllSnapshots401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class ListAllSnapshotsResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    list_all_snapshots_200_application_json_object: Optional[ListAllSnapshots200ApplicationJSON] = field(default=None)
    list_all_snapshots_401_application_json_object: Optional[ListAllSnapshots401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
