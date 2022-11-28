from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GistsGetPathParams:
    gist_id: str = field(metadata={'path_param': { 'field_name': 'gist_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GistsGet403ApplicationJSONBlock:
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at') }})
    html_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    

@dataclass_json
@dataclass
class GistsGet403ApplicationJSON:
    block: Optional[GistsGet403ApplicationJSONBlock] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('block') }})
    documentation_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class GistsGetRequest:
    path_params: GistsGetPathParams = field()
    

@dataclass
class GistsGetResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    gist_simple: Optional[shared.GistSimple] = field(default=None)
    gists_get_403_application_json_object: Optional[GistsGet403ApplicationJSON] = field(default=None)
    
