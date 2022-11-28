from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreativeVideoSearchResults:
    auto_corrections: Optional[AutoCorrections] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_corrections') }})
    facets: Optional[SearchFacetsResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('facets') }})
    related_searches: Optional[List[RelatedSearch]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('related_searches') }})
    result_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result_count') }})
    videos: Optional[List[CreativeVideoSearchItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videos') }})
    
