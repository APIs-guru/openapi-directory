from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class CreateDropletRequestBody1:
    backups: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backups' }})
    image: Any = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    ipv6: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipv6' }})
    monitoring: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'monitoring' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    private_networking: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'private_networking' }})
    region: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    size: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    ssh_keys: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ssh_keys' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    user_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_data' }})
    vpc_uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vpc_uuid' }})
    with_droplet_agent: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'with_droplet_agent' }})
    

@dataclass_json
@dataclass
class CreateDropletRequestBody2:
    backups: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backups' }})
    image: Any = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    ipv6: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipv6' }})
    monitoring: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'monitoring' }})
    names: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'names' }})
    private_networking: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'private_networking' }})
    region: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    size: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    ssh_keys: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ssh_keys' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    user_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_data' }})
    vpc_uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vpc_uuid' }})
    with_droplet_agent: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'with_droplet_agent' }})
    

@dataclass
class CreateDropletRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class CreateDroplet401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class CreateDropletResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    create_droplet_202_application_json_one_of: Optional[Any] = field(default=None)
    create_droplet_401_application_json_object: Optional[CreateDroplet401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
