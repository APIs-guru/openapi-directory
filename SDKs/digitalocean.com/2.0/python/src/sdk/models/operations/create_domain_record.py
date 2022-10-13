from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateDomainRecordPathParams:
    domain_name: str = field(default=None, metadata={'path_param': { 'field_name': 'domain_name', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateDomainRecordRequestBody1:
    data: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    flags: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flags' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priority' }})
    tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag' }})
    ttl: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ttl' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    weight: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'weight' }})
    

@dataclass_json
@dataclass
class CreateDomainRecordRequestBody2:
    data: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    flags: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flags' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priority' }})
    tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag' }})
    ttl: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ttl' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    weight: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'weight' }})
    

@dataclass_json
@dataclass
class CreateDomainRecordRequestBody3:
    data: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    flags: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flags' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priority' }})
    tag: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag' }})
    ttl: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ttl' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    weight: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'weight' }})
    

@dataclass_json
@dataclass
class CreateDomainRecordRequestBody4:
    data: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    flags: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flags' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priority' }})
    tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag' }})
    ttl: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ttl' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    weight: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'weight' }})
    

@dataclass_json
@dataclass
class CreateDomainRecordRequestBody5:
    data: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    flags: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flags' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    priority: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priority' }})
    tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag' }})
    ttl: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ttl' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    weight: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'weight' }})
    

@dataclass_json
@dataclass
class CreateDomainRecordRequestBody6:
    data: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    flags: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flags' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priority' }})
    tag: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag' }})
    ttl: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ttl' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    weight: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'weight' }})
    

@dataclass_json
@dataclass
class CreateDomainRecordRequestBody7:
    data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    flags: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flags' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priority' }})
    tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag' }})
    ttl: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ttl' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    weight: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'weight' }})
    

@dataclass_json
@dataclass
class CreateDomainRecordRequestBody8:
    data: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    flags: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flags' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    port: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    priority: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priority' }})
    tag: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag' }})
    ttl: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ttl' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    weight: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'weight' }})
    

@dataclass_json
@dataclass
class CreateDomainRecordRequestBody9:
    data: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    flags: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flags' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priority' }})
    tag: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag' }})
    ttl: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ttl' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    weight: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'weight' }})
    

@dataclass
class CreateDomainRecordRequest:
    path_params: CreateDomainRecordPathParams = field(default=None)
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class CreateDomainRecord401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class CreateDomainRecordResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    create_domain_record_201_application_json_any: Optional[Any] = field(default=None)
    create_domain_record_401_application_json_object: Optional[CreateDomainRecord401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
