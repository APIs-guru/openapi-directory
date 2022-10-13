from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateGarbageCollectionPathParams:
    garbage_collection_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'garbage_collection_uuid', 'style': 'simple', 'explode': False }})
    registry_name: str = field(default=None, metadata={'path_param': { 'field_name': 'registry_name', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateGarbageCollectionRequestBody:
    cancel: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cancel' }})
    

@dataclass
class UpdateGarbageCollectionRequest:
    path_params: UpdateGarbageCollectionPathParams = field(default=None)
    request: UpdateGarbageCollectionRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    
class UpdateGarbageCollection200ApplicationJSONGarbageCollectionStatusEnum(str, Enum):
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
class UpdateGarbageCollection200ApplicationJSONGarbageCollection:
    blobs_deleted: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blobs_deleted' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    freed_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'freed_bytes' }})
    registry_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registry_name' }})
    status: Optional[UpdateGarbageCollection200ApplicationJSONGarbageCollectionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uuid' }})
    

@dataclass_json
@dataclass
class UpdateGarbageCollection200ApplicationJSON:
    garbage_collection: Optional[UpdateGarbageCollection200ApplicationJSONGarbageCollection] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'garbage_collection' }})
    

@dataclass_json
@dataclass
class UpdateGarbageCollection401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class UpdateGarbageCollectionResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    update_garbage_collection_200_application_json_object: Optional[UpdateGarbageCollection200ApplicationJSON] = field(default=None)
    update_garbage_collection_401_application_json_object: Optional[UpdateGarbageCollection401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
