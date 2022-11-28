from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MergeAForkRequestBody:
    destination: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    strategy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('strategy') }})
    

@dataclass
class MergeAForkRequest:
    request: Optional[MergeAForkRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class MergeAForkResponse:
    content_type: str = field()
    status_code: int = field()
    
