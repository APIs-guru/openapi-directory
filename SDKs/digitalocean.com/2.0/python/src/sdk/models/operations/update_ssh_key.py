from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateSSHKeyPathParams:
    ssh_key_identifier: Any = field(default=None, metadata={'path_param': { 'field_name': 'ssh_key_identifier', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateSSHKeyRequestBody:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass
class UpdateSSHKeyRequest:
    path_params: UpdateSSHKeyPathParams = field(default=None)
    request: UpdateSSHKeyRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class UpdateSSHKey401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class UpdateSSHKeyResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    update_ssh_key_200_application_json_any: Optional[Any] = field(default=None)
    update_ssh_key_401_application_json_object: Optional[UpdateSSHKey401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
