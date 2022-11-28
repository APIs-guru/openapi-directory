from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SearchResultTextMatchesMatches:
    indices: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('indices') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    

@dataclass_json
@dataclass
class SearchResultTextMatches:
    fragment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fragment') }})
    matches: Optional[List[SearchResultTextMatchesMatches]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matches') }})
    object_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('object_type') }})
    object_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('object_url') }})
    property: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('property') }})
    
