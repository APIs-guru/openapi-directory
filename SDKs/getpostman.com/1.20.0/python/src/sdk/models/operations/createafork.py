from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class CreateAForkPathParams:
    collection_uid: str = field(default=None, metadata={'path_param': { 'field_name': 'collection_uid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateAForkQueryParams:
    workspace: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'workspace', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class CreateAForkRequestBody:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass
class CreateAForkRequest:
    path_params: CreateAForkPathParams = field(default=None)
    query_params: CreateAForkQueryParams = field(default=None)
    request: Optional[CreateAForkRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateAForkResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
