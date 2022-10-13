from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class ActionsCreateOrUpdateOrgSecretPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    secret_name: str = field(default=None, metadata={'path_param': { 'field_name': 'secret_name', 'style': 'simple', 'explode': False }})
    
class ActionsCreateOrUpdateOrgSecretRequestBodyVisibilityEnum(str, Enum):
    ALL = "all"
    PRIVATE = "private"
    SELECTED = "selected"


@dataclass_json
@dataclass
class ActionsCreateOrUpdateOrgSecretRequestBody:
    encrypted_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encrypted_value' }})
    key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key_id' }})
    selected_repository_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selected_repository_ids' }})
    visibility: ActionsCreateOrUpdateOrgSecretRequestBodyVisibilityEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'visibility' }})
    

@dataclass
class ActionsCreateOrUpdateOrgSecretRequest:
    path_params: ActionsCreateOrUpdateOrgSecretPathParams = field(default=None)
    request: Optional[ActionsCreateOrUpdateOrgSecretRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ActionsCreateOrUpdateOrgSecretResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    empty_object: Optional[dict[str, Any]] = field(default=None)
    
