from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class CreateAForkPathParams:
    collection_uid: str = field(metadata={'path_param': { 'field_name': 'collection_uid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateAForkQueryParams:
    workspace: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'workspace', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class CreateAForkRequestBody:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass
class CreateAForkRequest:
    path_params: CreateAForkPathParams = field()
    query_params: CreateAForkQueryParams = field()
    request: Optional[CreateAForkRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateAForkResponse:
    content_type: str = field()
    status_code: int = field()
    
