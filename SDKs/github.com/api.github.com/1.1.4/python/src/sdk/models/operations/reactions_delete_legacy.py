from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ReactionsDeleteLegacyPathParams:
    reaction_id: int = field(metadata={'path_param': { 'field_name': 'reaction_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ReactionsDeleteLegacy415ApplicationJSON:
    documentation_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class ReactionsDeleteLegacyRequest:
    path_params: ReactionsDeleteLegacyPathParams = field()
    

@dataclass
class ReactionsDeleteLegacyResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    reactions_delete_legacy_415_application_json_object: Optional[ReactionsDeleteLegacy415ApplicationJSON] = field(default=None)
    
