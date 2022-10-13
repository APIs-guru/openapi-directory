from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GistsUpdatePathParams:
    gist_id: str = field(default=None, metadata={'path_param': { 'field_name': 'gist_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GistsUpdateRequestBodyFiles:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    filename: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filename' }})
    

@dataclass_json
@dataclass
class GistsUpdateRequestBody:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    files: Optional[dict[str, GistsUpdateRequestBodyFiles]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'files' }})
    

@dataclass
class GistsUpdateRequest:
    path_params: GistsUpdatePathParams = field(default=None)
    request: Optional[GistsUpdateRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GistsUpdateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    gist_simple: Optional[shared.GistSimple] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
