from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateProjectPathParams:
    project_id: str = field(default=None, metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    
class UpdateProjectRequestBodyEnvironmentEnum(str, Enum):
    DEVELOPMENT = "Development"
    STAGING = "Staging"
    PRODUCTION = "Production"


@dataclass_json
@dataclass
class UpdateProjectRequestBody:
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    environment: UpdateProjectRequestBodyEnvironmentEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_default: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_default' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    owner_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owner_id' }})
    owner_uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owner_uuid' }})
    purpose: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purpose' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass
class UpdateProjectRequest:
    path_params: UpdateProjectPathParams = field(default=None)
    request: UpdateProjectRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class UpdateProject401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class UpdateProjectResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    update_project_200_application_json_any: Optional[Any] = field(default=None)
    update_project_401_application_json_object: Optional[UpdateProject401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
