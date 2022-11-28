from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LiveStreamSessionReferrer:
    medium: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('medium') }})
    search_term: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchTerm') }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
