from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ListDatabaseBackupsPathParams:
    database_cluster_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'database_cluster_uuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListDatabaseBackupsRequest:
    path_params: ListDatabaseBackupsPathParams = field(default=None)
    

@dataclass_json
@dataclass
class ListDatabaseBackups200ApplicationJSONBackups:
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    size_gigabytes: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size_gigabytes' }})
    

@dataclass_json
@dataclass
class ListDatabaseBackups200ApplicationJSON:
    backups: List[ListDatabaseBackups200ApplicationJSONBackups] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backups' }})
    

@dataclass_json
@dataclass
class ListDatabaseBackups401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class ListDatabaseBackupsResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    list_database_backups_200_application_json_object: Optional[ListDatabaseBackups200ApplicationJSON] = field(default=None)
    list_database_backups_401_application_json_object: Optional[ListDatabaseBackups401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
