from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class RunGarbageCollectionPathParams:
    registry_name: str = field(default=None, metadata={'path_param': { 'field_name': 'registry_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class RunGarbageCollectionRequest:
    path_params: RunGarbageCollectionPathParams = field(default=None)
    
class RunGarbageCollection201ApplicationJSONGarbageCollectionStatusEnum(str, Enum):
    REQUESTED = "requested"
    WAITING_FOR_WRITE_JW_TS_TO_EXPIRE = "waiting for write JWTs to expire"
    SCANNING_MANIFESTS = "scanning manifests"
    DELETING_UNREFERENCED_BLOBS = "deleting unreferenced blobs"
    CANCELLING = "cancelling"
    FAILED = "failed"
    SUCCEEDED = "succeeded"
    CANCELLED = "cancelled"


@dataclass_json
@dataclass
class RunGarbageCollection201ApplicationJSONGarbageCollection:
    blobs_deleted: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blobs_deleted' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    freed_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'freed_bytes' }})
    registry_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registry_name' }})
    status: Optional[RunGarbageCollection201ApplicationJSONGarbageCollectionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uuid' }})
    

@dataclass_json
@dataclass
class RunGarbageCollection201ApplicationJSON:
    garbage_collection: Optional[RunGarbageCollection201ApplicationJSONGarbageCollection] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'garbage_collection' }})
    

@dataclass_json
@dataclass
class RunGarbageCollection401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class RunGarbageCollectionResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    run_garbage_collection_201_application_json_object: Optional[RunGarbageCollection201ApplicationJSON] = field(default=None)
    run_garbage_collection_401_application_json_object: Optional[RunGarbageCollection401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
