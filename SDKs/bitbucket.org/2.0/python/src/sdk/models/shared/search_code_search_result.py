from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SearchCodeSearchResult:
    content_match_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content_match_count') }})
    content_matches: Optional[List[SearchContentMatch]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content_matches') }})
    file: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('file') }})
    path_matches: Optional[List[SearchSegment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path_matches') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
