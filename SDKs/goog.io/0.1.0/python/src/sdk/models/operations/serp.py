from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class Serp200ApplicationJSON:
    position: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('query') }})
    searched_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searched_results') }})
    website: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('website') }})
    

@dataclass
class SerpRequest:
    request: shared.SerpData = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SerpResponse:
    content_type: str = field()
    status_code: int = field()
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    serp_200_application_json_object: Optional[Serp200ApplicationJSON] = field(default=None)
    
