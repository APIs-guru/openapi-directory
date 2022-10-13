from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ReactionsDeleteLegacyPathParams:
    reaction_id: int = field(default=None, metadata={'path_param': { 'field_name': 'reaction_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReactionsDeleteLegacyRequest:
    path_params: ReactionsDeleteLegacyPathParams = field(default=None)
    

@dataclass_json
@dataclass
class ReactionsDeleteLegacy415ApplicationJSON:
    documentation_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentation_url' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class ReactionsDeleteLegacyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    reactions_delete_legacy_415_application_json_object: Optional[ReactionsDeleteLegacy415ApplicationJSON] = field(default=None)
    
