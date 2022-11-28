from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Keyword:
    entity_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entity_types') }})
    entity_uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entity_uris') }})
    keyword_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyword_id') }})
    relevance: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relevance') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
